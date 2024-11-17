import { Locator, Page } from '@playwright/test'

export class OrderPage {
  private page: Page
  readonly statusButton: Locator
  // add more locators here

  constructor(page: Page) {
    this.page = page
    this.statusButton = this.page.getByTestId('openStatusPopup-button')
  }
}
