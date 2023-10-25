Feature: Login

    I want to log into Conduit

    @smoke
    Scenario: Conduit Login
        Given I open Conduit login page
        When I type in 
            | username | password |
            | luizaboaventuram@gmail.com | 123456 |
        And I click on Sign in button
        Then "Your feed" should be shown
