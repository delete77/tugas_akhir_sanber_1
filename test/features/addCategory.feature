Feature: add Category Feature

@all @positive 
Scenario: User successfully logs in with valid credentials
  Given I open KasirDemo website
  When I login with valid credential
  Then I should be logged in successfully

@all @positive
Scenario: User successfully add Category
   Given I In KasirDemo dashboard
   When I Click button Category
   Then I should move to page Category

@all @positive
Scenario: User successfully add Category
    Given I Click button add
    When I input name and description
    Then I should be successfully add Category