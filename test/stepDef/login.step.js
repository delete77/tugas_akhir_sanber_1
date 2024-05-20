const { Given, When, Then } = require('@cucumber/cucumber');
const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');


Given(/^I open Kasir Demo website$/, async () => {
    await Page.open('/');
});

When(/^I login with valid username and password$/, async () => {
    await LoginPage.login('cahyoep23@gmail.com', 'Password09');
});

Then(/^I should be login successfully$/, async () => {
    await DashboardPage.assertDashboardPageUrl();
});
