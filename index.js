const express = require('express')
const app = express() // object // {}
const path = require('path')
const { create } = require('express-handlebars')


// Dotenv
require('dotenv').config()

const exhbs = create({
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    }
})

// View engine
app.engine('hbs', exhbs.engine)
app.set('view engine', 'hbs');
app.set('views', './views');

// Static folder
app.use(express.static(path.join(__dirname, 'public')))



app.use(express.json()) // json // requestlar uchun // req body ni json formatga aylantirib beradi

app.use(express.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'))
}

// Custom middleware


// Routing
app.use('/404', (req, res) => {
    res.render('404', {
        title: 404
    })
})


try {
    const port = process.env.PORT || 5000
    app.listen(port, () => {
        console.log('Server working on port', port);
    })
} catch (error) {
    console.error(error);
}