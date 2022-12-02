Feature:Bootcamp E2E

    Background:
        Given I have loaded the page
        And I have closed the promo banner
    
    @search_bar
    Scenario: Search bar
        When I enter the word "Windows" in the search bar
        And I click the search
        Then An item appears
    
    @logo_button
    Scenario: Internet shop logo button
        When I open Today's Best Deals tab
        And I click on the Internet shop logo
        Then The main page opened
