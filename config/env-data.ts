require('dotenv').config({ path: './env/prod.env' })

export const SERVICE_URL = process.env.URL
export const USERNAME = process.env.USERNAME
export const PASSWORD = process.env.PASSWORD
