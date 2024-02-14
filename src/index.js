import express from 'express';
import routes from './routes/routes';
import bodyParser from 'body-parser';

//import authentication from './middleware/authentication';

require('dotenv').config({ path:'./config/homolog.env'});

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, (error) => {
    if(error){
        throw new Error('Error to create server ', error);
    }else{
        console.warn('Server is running on port ', port);
    }
})