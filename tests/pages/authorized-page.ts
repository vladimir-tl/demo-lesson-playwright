import { BasePage } from './base-page'
import { Locator, Page } from '@playwright/test'

export class AuthorizedPage extends BasePage {
  readonly logoutButton: Locator
  readonly statusButton: Locator

  constructor(page: Page) {
    super(page)
    this.logoutButton = page.getByTestId('logout-button')
    this.statusButton = page.getByTestId('openStatusPopup-button')
    // continue with the rest of the implementation below
  }
}
