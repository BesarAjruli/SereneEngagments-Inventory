require('dotenv').config()
const {Pool} = require('pg')


module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: {rejectUnauthorized: false}
})