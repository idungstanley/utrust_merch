class Utrust{
    navigate(){
        return cy.visit("https://merchants.sandbox-utrust.com")
    }
    click_payment(){
        return cy.get("ul[role='menubar'] li[role='menuitem'] a[href='/payments/orders']").click()
    }
    enter_name(name){
        return cy.get(".TextBox_inputWrapper__AOiC8 input[name='customerName']").type(name,{enter})
    }
    enter_email(email){
        return cy.get(".TextBox_inputWrapper__AOiC8 input[name='customerEmail']").type(email,{enter})
    }
    send_invoice(){
        return cy.get("label input[name='sendIssuedEmail']").check()
    }
    billing_address(address){
        return cy.get("div.TextBox_inputWrapper__AOiC8 input[name='billingAddress']").type(address,{enter})
    }
    enter_city(city){
        return cy.get("div.TextBox_inputWrapper__AOiC8 input[name='city']").type(city,{enter})
    }
    enter_post_code(postcode){
        return cy.get("div.TextBox_inputWrapper__AOiC8 input[name='postCode']").type(postcode,{enter})
    }
    enter_country(country){
        return cy.get("div.SearchableInput_root__2ezYN input[name='dropdown-input-country']").type(country)
    }
    select_currency(){
        return cy.get("#downshift-4-input")
    }
    enter_amount(amount){
        return cy.get("#amount").type(amount,{enter})
    }
    enter_desc(desc){
        return cy.get("#description").type(desc)
    }
    submit_invoice(){
        return cy.get("generate-invoice-button").click()
    }
}