import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private page: Page;
  readonly url: string = "https://fe-delivery.tallinn-learning.ee";
  readonly signInButton: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = this.page.getByTestId("signIn-button");
    this.usernameField = this.page.getByTestId("username-input");
    this.passwordField = this.page.getByTestId("password-input");
  }

  async open() {
    await this.page.goto(this.url);
  }

  async signIn(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}
