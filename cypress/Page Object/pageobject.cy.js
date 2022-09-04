/// <reference types="cypress"/>
export default class Utrust {
  navigate() {
    return cy.visit("https://merchants.sandbox-utrust.com");
  }
  signin_email(email) {
    cy.get("#email").clear();
    cy.get("#email").type(email);
    return this;
  }
  signin_password(password) {
    cy.get("#password").clear();
    cy.get("#password").type(password);
    return this;
  }
  click_signin() {
    return cy.get("#progress-status").click();
  }
  click_menu() {
    return cy
      .get(".Sidebar_navButton__2cTfR > .Icon_auto__WB6i_ > svg")
      .click({ force: true });
  }
  click_payment() {
    return cy
      .get("ul[role='menubar'] li[role='menuitem'] a[href='/payments/orders']")
      .click({ force: true });
  }
  click_invoice() {
    return cy.get(":nth-child(2) > .Tabs_tab__3Yjya").click({ force: true });
  }
  add_newInvoice() {
    return cy
      .get("div .Payments_newInvoiceDesktop__oV8L2 button[name='button']")
      .click({ force: true });
  }
  enter_name(name) {
    cy.get(".TextBox_inputWrapper__AOiC8 input[name='customerName']").clear();
    cy.get(".TextBox_inputWrapper__AOiC8 input[name='customerName']").type(
      `${name}{enter}`
    );
    return this;
  }
  enter_email(email) {
    cy.get(".TextBox_inputWrapper__AOiC8 input[name='customerEmail']").clear();
    cy.get(".TextBox_inputWrapper__AOiC8 input[name='customerEmail']").type(
      `${email}{enter}`
    );
    return this;
  }
  send_invoice() {
    return cy.get("label input[name='sendIssuedEmail']").should("be.checked");
  }
  billing_address(address) {
    cy.get(
      "div.TextBox_inputWrapper__AOiC8 input[name='billingAddress']"
    ).clear();
    cy.get("div.TextBox_inputWrapper__AOiC8 input[name='billingAddress']").type(
      `${address}{enter}`
    );
    return this;
  }
  enter_city(city) {
    cy.get("div.TextBox_inputWrapper__AOiC8 input[name='city']").clear();
    cy.get("div.TextBox_inputWrapper__AOiC8 input[name='city']").type(
      `${city}{enter}`
    );
    return this;
  }
  enter_post_code(postcode) {
    cy.get("div.TextBox_inputWrapper__AOiC8 input[name='postCode']").clear();
    cy.get("div.TextBox_inputWrapper__AOiC8 input[name='postCode']").type(
      `${postcode}{enter}`
    );
    return this;
  }
  enter_country(country) {
    cy.get(
      "div.SearchableInput_root__2ezYN input[name='dropdown-input-country']"
    ).clear();
    cy.get(
      "div.SearchableInput_root__2ezYN input[name='dropdown-input-country']"
    ).type(country);
    return this;
  }
  select_currency() {
    return cy.get("#downshift-4-input");
  }
  enter_amount(amount) {
    cy.get("#amount").clear();
    cy.get("#amount").type(amount);
    return this;
  }
  enter_desc(desc) {
    cy.get("#description").clear();
    cy.get("#description").type(desc);
    return this;
  }
  submit_invoice() {
    return cy.get("#generate-invoice-button").click({ force: true });
  }
  cancel_invoice() {
    return cy
      .get(".NewInvoiceConfirmationModal_buttons__1O-c9 button:nth-child(1)")
      .click({ force: true });
  }
  confirm_invoice_btn() {
    return cy
      .get("button[data-test='submit-new-invoice-button']")
      .click({ force: true });
  }
  confirm_success() {
    // cy.get(".InvoiceSentModal_root__1jglp span[css='1'] p")
    // cy.get(".InvoiceSentModal_root__1jglp h3")
    return cy.get("button[data-test='invoice-sent-ok']").click();
  }
  select_invoice() {
    return cy.get(".griddle-table-body tr:nth-child(1)").click();
  }
  copy_link() {
    return cy
      .get(".CodeDisplay_displayWrapper__3LSdR .CodeDisplay_isButton__B8CtY")
      .click();
  }
  logout(){
    return cy.get(".Sidebar_signOutWrapper__2QOPL div a[href='/sign-out']").click()
  }
  validate_amount(amount){
    return cy.get(".Details_total__2yYcA .Details_fiat__2oK6C").should("contain", amount)
  }
  validate_total_amount(amount){
    return cy.get(".Details_column__3cWJk .Details_totalFiat__1Dk90").should("contain", amount)
  }
  validate_desc(desc){
    return cy.get(".List_root__3LLI7 div").should("contain", desc)
  }
  validate_store_name(store){
    return cy.get(".Details_inline__1DFay .Details_storeName__3iENh").should("contain", store)
  }
}
