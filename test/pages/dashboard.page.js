class DashboardPage {
  get dashboardPageUrl (){
    return 'https://kasirdemo.belajarqa.com/dashboard';
  }

  async assertDashboardPageUrl() {
    await expect(browser).toHaveUrl(this.dashboardPageUrl);
  }

  async openDashboard() {
    await browser.url('/dashboard');
  }
}

module.exports = new DashboardPage();

