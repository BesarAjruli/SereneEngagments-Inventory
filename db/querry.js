const pool = require('./pool')

async function getInventory(){
const {rows} = await pool.query('SELECT * FROM inventory')
return rows
}

async function createItem(req) {
    const {buffer} = req.file
    const {name, quantity, price} = req.body
    pool.query('INSERT INTO inventory (name, quantity, price, image) VALUES ($1, $2, $3, $4)', [name, quantity, price, buffer])
}

async function searchItem(search){
    const {rows} = await pool.query("SELECT * FROM inventory WHERE LOWER(name) LIKE '%' || LOWER($1) || '%' OR LOWER(id::text) LIKE '%' || LOWER($1) || '%'", [search])
    return rows
}

async function deleteItem(id){
    await pool.query('DELETE FROM inventory WHERE id = $1', [id])
}

async function editItem(id, req){
    const {name, quantity, price} = req.body
    await pool.query("UPDATE inventory SET name = $1, quantity = $2, price = $3", [name, price, quantity])
}

module.exports = {
    getInventory,
    createItem,
    searchItem,
    deleteItem,
    editItem
}