const BOOK_MODULE = require('../module/book.module')
module.exports = {

    searching(bookData, callBack) {
        console.log("bookdata--->", bookData)

        BOOK_MODULE.search(bookData, (err, data) => {
            if (err) {
                return callBack(err, null)
            } else if (data !== null) {
                console.log("data at service",data);
                
                return callBack(null, data)
            }
        })

    }
}