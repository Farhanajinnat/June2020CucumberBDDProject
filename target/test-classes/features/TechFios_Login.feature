 @End2End
Feature: Validate Techfios Login Page Functionality

Background:
 Given User is on the TechFios Login Page

@Scenario1
Scenario: User should be able to log in with valid credentials (Making Variable work as Placeholders)
When User enters the username as "demo@techfios.com"
When User enters the password as "abc123"
And User clicks on the log in button
Then User should be able to see the Dashboard Page

@Scenario2
Scenario: User should be able to log in with valid credentials (Making Variable work as Placeholders)
When User enters the username as "demo@techfios.com"
When User enters the password as "abc124"
And User clicks on the log in button
Then User should be able to see the Dashboard Page


@Scenario3
Scenario Outline: User should be able to login with valid credentials (Keeping Variables and Placeholders separated)
  When User enters the "<userName>" and "<password>" 
  And User clicks on the log in button
  Then User should be able to see the Dashboard Page

   Examples:
   |userName |password|
   |demo@techfios.com|abc123|
   |demo@techfios.com|abc124|
   |demi@techfios.com|abc123|






