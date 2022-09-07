Feature: End to End Merchant Payment Gateway

    Merchant Payment Gateway

    Scenario: Payment gateway delivery
    Given I Signin to Utrust merchant payment dashboard
    When I select new invoice
    And I fill the inputs and generate Invoice
    Then I open the payment link and check if the values are correct