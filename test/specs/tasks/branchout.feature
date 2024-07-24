# took 1 minutes to complete e2e - including debugging
Feature: Branchout to dataset

Background: 
    Given user is on datalanding page

Scenario: Verify branchout to dataset functionality
    When user clicks on combine option in actionbar
    When user clicks on the branchout button
    Then user should be shown by branchout panel
    And user click on apply button
    Then user should see branchout action in pipeline