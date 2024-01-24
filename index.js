const express = require ('express');
const app = express();
const morgan = require ('morgan');


//Setting
app.set('port', process.env.PORT || 3006);
app.set('json spaces', 2);

//Middleware 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use(require('./src/routes/index'));
app.use('/api/movies', require('./src/routes/movies'));
app.use('/api/users', require('./src/routes/users'))

app.get('/', (req, res) => {
    res.send('Helo')
})

//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Listen on port ${app.get('port')}`);
})