import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + './env' });

export default new Pool({
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 30000
});