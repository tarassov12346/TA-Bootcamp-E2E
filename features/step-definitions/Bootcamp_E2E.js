const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I have loaded the page",
    async () => {
        await browser.url('https://www.newegg.com');
    });

Given("I have closed the promo banner",
    async () => {
        const banner = await $('//*[@aria-label="mask"]');
        try {
            expect(item).toBeDisplayed;
            browser.refresh();
        }
        catch (err) { console.log(err.massege) }
    });

When("I enter the word {string} in the search bar",
    async (word) => {
        const searchBar = $('input[type=search]');
        await searchBar.click();
        await searchBar.setValue(word);
    });

When("I click the search",
    async () => {
        const searchBarButton = $('div.header2021-search-button');
        await searchBarButton.click();
    });

Then("An item appears",
    async () => {
        const item = await $('//*[@class="item-cell"]');
        await item.waitForDisplayed({ timeout: 10000 });
        expect(item).toBeDisplayed;
    });

When("I open Today's Best Deals tab",
    async () => {
        const tab = await $('#trendingBanner_720202');
        tab.click();
    });

When("I click on the Internet shop logo",
    async () => {
        const logo = await $('div.header2021-nav.header2021-cart');
        logo.click();
    });

Then("The main page opened",
    async () => {
        const cart = await $('#cart-top');
        await cart.waitForDisplayed({ timeout: 10000 });
        await expect(browser).toHaveUrl('https://secure.newegg.com/shop/cart');
    });



