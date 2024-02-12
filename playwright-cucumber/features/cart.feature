Feature: Add Elements to cart

  Background:
    Given User is on login page

  Scenario: Add to Elements to carts
    When User log with "standard_user" and "secret_sauce"
    Then The Home page title is displayed
    And Number of products displayed is 6
    When User add product "Backpack" to cart
    Then Number of products in Cart is 1
    When User add product "Bike" to cart
    Then Number of products in Cart is 2
  