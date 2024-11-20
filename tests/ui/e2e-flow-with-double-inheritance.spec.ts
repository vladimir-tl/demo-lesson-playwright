import { LoginPage } from '../pages/login-page'
import { expect, test } from '@playwright/test'
import { PASSWORD, USERNAME } from '../../config/env-data'

let authPage: LoginPage

test.beforeEach(async ({ page }) => {
  authPage = new LoginPage(page)
  await authPage.open()
})

test('verify status button and logout with authorized order page', async ({}) => {
  const orderCreationPage = await authPage.signInandReturnAuthorizedPage(USERNAME, PASSWORD)
  await expect.soft(orderCreationPage.statusButton).toBeVisible()
  await expect.soft(orderCreationPage.logoutButton).toBeVisible()
})
