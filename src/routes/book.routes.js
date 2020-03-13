const BOOK_CONTROLLER = require('../controller/book.controller')
module.exports=(app)=>{
app.get('/searchBook',BOOK_CONTROLLER.searchingStart)
}