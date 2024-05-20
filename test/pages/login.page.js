class LoginPage {
  // Di sini didefinisikan locator dari elemen
  get usernameInput() {
    return $('#email'); // locator field username
  }

  get passwordInput() {
    return $('#password'); // locator field password
  }

  get loginButton() {
    return $('button[type="submit"]'); // locator login button
  }

  // Di sini didefinisikan action yang akan dilakukan kepada elemen
  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

}
module.exports = new LoginPage();
