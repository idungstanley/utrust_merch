/// <reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Utrust from "../../pageObject/pageobject.cy";

const serviceId = "sprmwosd";
const serviceDomain = "sprmwosd.mailosaur.net";
const emailAddress = "sundaystanley56@" + serviceDomain;
const handle = new Utrust();

Given("I Signin to Utrust merchant payment dashboard", function() {
  handle.navigate();
  handle.signin_email(this.data.email);
  handle.signin_password(this.data.password);
  handle.click_signin();
});

When("I select new invoice", () => {
  handle.click_menu();
  handle.click_payment();
  cy.wait(2000);
  handle.click_invoice();
  cy.wait(2000);
  handle.add_newInvoice();
});

And("I fill the inputs and generate Invoice", function(){
  cy.viewport("macbook-16");
  handle.enter_name(this.data.name);
  handle.enter_email(emailAddress);
  handle.send_invoice();
  handle.billing_address(this.data.billing_address);
  handle.enter_city(this.data.city);
  handle.enter_post_code(this.data.postal_code);
  cy.select_country(this.data.country);
  cy.select_currency(this.data.currency);
  handle.enter_amount(5000);
  handle.enter_desc(this.data.desc);
  cy.wait(1000);
  handle.submit_invoice();
  handle.confirm_invoice_btn();
  cy.contains("Invoice sent")
  handle.validate_invoice_success()
  handle.confirm_success();
  handle.validate_email(serviceId, emailAddress)
});

Then("I open the payment link and check if the values are correct", function(){
  cy.viewport("iphone-xr");
  cy.copy_and_visit(this.data.payment_selector);
  cy.wait(1000)
  handle.select_details()
  handle.validate_desc(this.data.desc)
  handle.validate_amount(this.data.amount);
  handle.validate_store_name(this.data.store);
});
