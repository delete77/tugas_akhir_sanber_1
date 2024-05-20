Feature: Login Feature

@all @positive
Scenario: User successfully login with valid credentials
  Given I open Kasir Demo website
  When I login with valid username and password
  Then I should be login successfully
