$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFios_Login.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login Page Functionality",
  "description": "",
  "id": "validate-techfios-login-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.before({
  "duration": 6027545100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 890900400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to log in with valid credentials (Making Variable work as Placeholders)",
  "description": "",
  "id": "validate-techfios-login-page-functionality;user-should-be-able-to-log-in-with-valid-credentials-(making-variable-work-as-placeholders)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters the username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters the password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to see the Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "StepDefs.user_enters_name_as(String)"
});
formatter.result({
  "duration": 2116195900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "StepDefs.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 2074378800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_clicks_on_the_log_in_button()"
});
formatter.result({
  "duration": 3405070000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs.user_should_be_able_to_see_the_DashBoard_Page()"
});
formatter.result({
  "duration": 379845300,
  "status": "passed"
});
formatter.after({
  "duration": 636643100,
  "status": "passed"
});
});