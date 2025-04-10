Feature:EIDPerson

    # @run
    Scenario: I should be able to onboard a person
        Given I visit EmpowerID
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        Then I should see dashboard tab on navigation bar
        Then I should see Identity Administration tab on dashboard page
        When I click on Identity Administration tab on dashboard page
        And I click on People tab on dashboard page
        And I click on Onboard Person on action panel on Person page
        And I press 'Next' button
        And I fill in "Onboard a Person" form with the following data:
            | FirstName | LastName | Email              | BusinessRole   | Location             |
            | Automated | Person   | test@EmpowerID.com | Temporary Role | Default Organization |
        And I press 'Next' button
        And I press 'Submit' button
        Then I should see 'Create Person Test Person in Temporary Role in Default Organization was executed successfully.' success message on Person page

    @run
    Scenario: I should be able to search application on Resadmin Page
        Given I visit ResAdmin
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        Then I should see ResAdmin Page
        When I click on Application Search field
        And I fill in Application search field with "AK_TestPBACApp"
        Then I should see the searched application in results
