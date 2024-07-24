import Page from "../page.js";

class LoginPage extends Page {
  get username() {
    return $("#username");
  }

  get password() {
    return $("#password");
  }

  get loginButton() {
    return $("//button/div[contains(.,'Log In')]");
  }

  get errorMessage() {
    return $(
      "//div[contains(text(),' Email address or Password incorrect. ')]"
    );
  }

  open() {
    return super.open();
  }

  async enterUsername(username) {
    await this.username.setValue(username);
  }

  async enterPassword(password) {
    await this.password.setValue(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async waitForErrorMessage() {
    await this.errorMessage.waitForExist();
  }

  async isErrorMessageDisplayed() {
    return await this.errorMessage.isDisplayed();
  }

  async login(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}

export default new LoginPage();
