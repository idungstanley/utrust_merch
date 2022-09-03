/// <reference types="cypress"/>
import Utrust from "../../Page Object/pageobject.cy";

describe("Create Invoice", {browser:"electron"},() => {
  const serviceId = "sprmwosd";
  const serviceDomain = "sprmwosd.mailosaur.net";
  const emailAddress = "sundaystanley56@" + serviceDomain;
  const handle = new Utrust();
  let data;
  before(() => {
    cy.fixture("credentials").then((testdata) => {
      data = testdata;
    });
  });
  beforeEach(()=>{
    handle.navigate();
  })
  it.skip("Fill and generate Invoice", () => {
    handle.signin_password(data.password);
    handle.signin_email(data.email);
    handle.click_signin();
    handle.click_menu();
    handle.click_payment();
    cy.wait(2000);
    handle.click_invoice();
    cy.wait(2000);
    handle.add_newInvoice();
    handle.enter_name(data.name);
    handle.enter_email(emailAddress);
    handle.send_invoice();
    handle.billing_address(data.address);
    handle.enter_city(data.city);
    handle.enter_post_code(data.postal_code);
    cy.select_country(data.country);
    cy.select_currency(data.currency);
    handle.enter_amount(5000);
    cy.wait(2000);
    cy.pause();
    handle.submit_invoice();
    cy.pause();
    cy.viewport("macbook-16")
    handle.confirm_invoice_btn();
    handle.confirm_success();
    cy.mailosaurGetMessage(serviceId, {
      sentTo: emailAddress,
    }).then((email) => {
      cy.log(email.subject);
    })
  })
  it("copy and paste",()=>{
    cy.viewport("macbook-16")
    handle.signin_password(data.password);
    handle.signin_email(data.email);
    handle.click_signin();
    handle.click_menu();
    handle.click_payment();
    cy.wait(2000);
    handle.click_invoice();
    cy.wait(2000);
    handle.select_invoice()
    handle.copy_link()
    cy.viewport('iphone-xr')
    cy.copy_and_visit(data.payment_selector)
  })
});
