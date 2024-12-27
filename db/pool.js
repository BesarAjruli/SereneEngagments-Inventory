require('dotenv').config()
const {Pool} = require('pg')


module.exports = new Pool({
    connectionString: 'postgres://koyeb-adm:ksD4J3VRdwpC@ep-empty-hat-a22x2nts.eu-central-1.pg.koyeb.app/koyebdb',
    ssl: {rejectUnauthorized: false}
})