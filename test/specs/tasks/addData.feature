Feature: Add data in mammoth

# Background:
#     Given user is logged in

Scenario: Upload file from local
    Given user is logged in
    When user clicks on add data option
    And user selects file upload option
    And user uploads a file
    Then user should see the uploaded file "Reorder.csv" on the datalanding page

Scenario: Upload file from URL
    When user clicks on add data option
    And user selects URL upload option
    And user enters a URL
    And user clicks on submit button
    Then user should see the uploaded file "Store-Inactive_Employees.csv" on the datalanding page

Scenario: Upload file from webhook
    When user clicks on add data option
    And user selects webhook option
    And user enters a webhook name as "Test_webhook"
    And user clicks on submit button
    Then user should see the webhook created

# Scenario: Create dataset from tp connectors 
#     When user clicks on add data option
#     And user selects tp connectors option
#     And user selects a connector
#     And user creates a new connection.
#     When user select the connection
#     And user selects a table
#     And user clicks on apply button
#     Then user should see the dataset in datalanding page

# 20 min so far