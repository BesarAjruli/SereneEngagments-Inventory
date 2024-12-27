const db = require('../db/querry')

async function getInventory(req,res) {
    const data = await db.getInventory()
    res.render('index', {data})
}

async function createItem(req, res){
    await db.createItem(req)
    res.redirect('/')
}

async function searchItem(search,res, path){
    const data = await db.searchItem(search)
    res.render(path, {data})
}

async function deleteItem(res, id){
    await db.deleteItem(id)
    res.redirect('/')
}

async function editItem(id, req, res){
    await db.editItem(id, req)
    res.redirect('/')
}

module.exports = {
    getInventory,
    createItem,
    searchItem,
    deleteItem,
    editItem
}