import dotenv from 'dotenv'
dotenv.config({ path: 'env/prod.env' })

if (!process.env.URL || !process.env.USERNAME || !process.env.PASSWORD) {
  throw new Error('Missing required environment variables')
}

export const SERVICE_URL: string = process.env.URL
export const USERNAME: string = process.env.USERNAME
export const PASSWORD: string = process.env.PASSWORD
