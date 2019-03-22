const http = require('http');
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const app = express();

app.engine('handlebars', expressHbs());
app.set('view engine', 'handlebars');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle:'Page not found!!'}); // mira automáticamente en el view folder porque se lo hemos dicha arriba en el app.set
});


app.listen(3000);
