import dotenv from 'dotenv'
if (process.env.CI !== 'true') {
  dotenv.config({ path: 'env/prod.env' })
  console.log('Running in local environment')
} else {
  console.log('Running in CI environment')
}

if (!process.env.URL || !process.env.USERNAME || !process.env.PASSWORD) {
  throw new Error('Missing required environment variables')
}

export const SERVICE_URL: string = process.env.URL
export const USERNAME: string = process.env.USERNAME
export const PASSWORD: string = process.env.PASSWORD
