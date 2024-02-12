Feature: Fail login

  Background:
    Given User is on login page

  Scenario: User is blocked
    When User log with "locked_out_user" and "secret_sauce"
    Then The blocked user error is displayed
  