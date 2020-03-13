const BOOK_SERVICE = require("../service/book.service");

module.exports = {
    searchingStart(req, res){
        try {

            req.checkBody('TITLE').exists();
            // req.checkBody('AUTHOR').exists();

            const error = req.validationErrors();
            const response = {};

            if (error) {
                response.success = false;
                response.message = 'enter valid details';
                response.error = error;
                return res.status(500).send(response);
            } else {
                // if (req.body == 'TITLE') {
                //     let bookData = {
                //         TITLE: req.body.TITLE
                //     }
                // } else {
                //     let bookData = {
                //         AUTHOR: req.body.AUTHOR
                //     }
                // }

                bookData = {
                    TITLE: req.body.TITLE,
                }
                BOOK_SERVICE.searching(bookData, (err, data) => {
                    
                    console.log('response--->',data)
                    if (err) {
                        response.success = false;
                        response.message = "error while getting book data";
                        response.err = err;
                        return res.status(500).send(response);
                    } else {
                        response.data = data
                        response.success = true;
                        response.message = 'successfull done'
                        return res.status(200).send(response)
                    }
                });

            }
        } catch (err) {
            console.log(err);
            res.status(500).send({ message: "error occure " })
        }
    }
}