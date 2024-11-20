import { Locator, Page } from '@playwright/test'
import { BasePage } from './base-page'

export class OrderPage extends BasePage {
  readonly statusButton: Locator
  // add more locators here

  constructor(page: Page) {
    super(page)
    this.statusButton = page.getByTestId('openStatusPopup-button')
  }
}
