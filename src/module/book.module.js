const MONGOOSE = require('mongoose')

const BOOKSCHEMA = MONGOOSE.Schema({

    TITLE: { type: String, require: true },
    AUTHOR: { type: String, require: true },
    YEAR: { type: Number, require: true },
    DESCRIPTION: { type: String, require: true },
    PRICE: { type: Number, require: true },
    RATING: { type: Number, require: true }
}, {
    timestamps: true
});


var SCHEMABOOK = MONGOOSE.model('book', BOOKSCHEMA);
// module.exports = MONGOOSE.model('book', BOOKSCHEMA);



module.exports = {
    search(bookData, callback) {
        console.log("bookdata at module", bookData.TITLE)
        SCHEMABOOK.find({'TITLE':{ $regex: bookData.TITLE , $options: 'i'}} ,(err, data) => {
            if (err) {
                return callback(err, null)
            }
            else {
                console.log("moduledata", data)
                return callback(null, data)
            }
        })

    }
}
