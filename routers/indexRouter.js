const {Router} = require('express')
const indexRouter = Router()
const controller = require('../controllers/indexController')
const multer = require('multer')

const upload = multer({ storage: multer.memoryStorage() });

indexRouter.get('/', (req,res) => {
controller.getInventory(req, res)
})
indexRouter.get('/new', (req,res) => res.render('new'))
indexRouter.post('/new', upload.single('image'), (req, res) => {
    controller.createItem(req, res)
})
indexRouter.post('/search', (req, res) => {
    controller.searchItem(req.body.search, res, 'search')
})
indexRouter.get('/change/:id', (req, res) => {
    controller.searchItem(req.params.id, res, 'changeItem')
})
indexRouter.get('/delete/:id', (req, res) => {
    controller.deleteItem(res, req.params.id)
})
indexRouter.get('/edit/:id', (req, res) => {
    controller.searchItem(req.params.id, res, 'edit')
})
indexRouter.post('/edit', (req, res) => {
    controller.editItem(req.params.id, req, res)
})

module.exports = indexRouter
