require('dotenv').config()
const {Pool} = require('pg')


module.exports = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {rejectUnauthorized: false}
})