import Utrust from "../../Page Object/pageobject.cy";
describe("Create Invoice", () => {
  const handle = new Utrust();
  let data
  before(() => {
      handle.navigate();
      cy.fixture("credentials").then((testdata)=> {
          data = testdata;
        });
  });
  it("Signin", () => {
    handle.signin_email(data.email);
    handle.signin_password(data.password)
    handle.click_signin()
  });
  it('Navigate to generate Invoice',()=>{
    handle.click_menu()
    handle.click_payment()
    cy.wait(2000)
    handle.click_invoice()
    cy.wait(2000)
    handle.add_newInvoice()
  })
  it("Fill Invoice form", ()=>{
    handle.enter_name(data.name)
    handle.enter_email(data.email)
    handle.send_invoice()
    handle.billing_address(data.address)
    handle.enter_city(data.city)
    handle.enter_post_code(data.postal_code)
    cy.select_country(data.country)
    cy.select_currency(data.currency)
    handle.enter_amount(5000)
    handle.enter_desc(data.desc)
  })
});
