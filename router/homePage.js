const express = require('express')
const router = express.Router() .
router.get('/', (req, res, next) => {
    res.render('home',
        {
            title: 'Home',
            isHome: true,
        })
})


module.exports = router