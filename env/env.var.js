import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Export the environment variables
export const MAMMOTH_EMAIL = process.env.MAMMOTH_EMAIL;
export const MAMMOTH_PASSWORD = process.env.MAMMOTH_PASSWORD;
export const MAMMOTH_SERVER_PREFIX = process.env.MAMMOTH_SERVER_PREFIX;
export const MAMMOTH_TEST_SITE = process.env.MAMMOTH_TEST_SITE;

