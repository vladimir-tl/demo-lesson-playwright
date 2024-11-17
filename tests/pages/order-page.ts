import { Locator, Page } from "@playwright/test";

export class OrderPage {
  private page: Page;
  readonly signInButton: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = this.page.getByTestId("signIn-button");
    this.usernameField = this.page.getByTestId("username-input");
    this.passwordField = this.page.getByTestId("password-input");
  }
}
