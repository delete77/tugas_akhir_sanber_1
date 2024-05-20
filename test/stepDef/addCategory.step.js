const { Given, When, Then } = require('@cucumber/cucumber');
const Page = require('../pages/page');
const LoginPage = require('../pages/login.page');
const DashboardPage = require('../pages/dashboard.page');
const CategoryPage = require('../pages/category.page');
const addCategoryPage = require('../pages/addCategory.page');

Given(/^I open KasirDemo website$/, async () => {
    await Page.open('/');
});

When(/^I login with valid credential$/, async () => {
    await LoginPage.login('cahyoep23@gmail.com', 'Password09');
});

Then(/^I should be logged in successfully$/, async () => {
    await DashboardPage.assertDashboardPageUrl();
});

Given(/^I In KasirDemo dashboard$/, async () => {
    await DashboardPage.openDashboard();
});

When(/^I Click button Category$/, async () => {
    await CategoryPage.click();
    // Menambahkan assert untuk memastikan bahwa perpindahan ke halaman kategori berhasil
    await CategoryPage.assertCategoryURL();
});

Then(/^I should move to page Category$/, async () => {
    await CategoryPage.assertCategoryURL();
});

Given(/^I Click button add$/, async () => {
    await addCategoryPage.AddButton.click();
});

When(/^I input name and description$/, async () => {
    await addCategoryPage.Input('Cahyo Eko', 'Buat Tugas Sanbercode');
});

Then(/^I should be successfully add Category$/, async () => {
    await addCategoryPage.assertAddCategory();
});
