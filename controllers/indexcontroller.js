const fs = require('fs');
const path = require('path');
module.exports = {
    index: (req, res, next) => {
        res.render('index')
        next()
    }
}