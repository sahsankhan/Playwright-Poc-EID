Feature: EIDlogin

    # @run
    Scenario: I should be able to login with valid credentials
        Given I visit EmpowerID
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        And I click on navbar toggle
        Then I should see dashboard tab on navigation bar

    # @run
    # Scenario: I should not be able to login with invalid credentials
    #     Given I visit EmpowerID
    #     When I enter invalid username and password on login page
    #     And I press login button
    #     Then I should see change password screen

    # @run
    Scenario: I should be able to logout successfully
        Given I visit EmpowerID
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        And I click on navbar toggle
        Then I should see dashboard tab on navigation bar
        When I click on profile button
        And I click on logout button
        Then I should see login screen
