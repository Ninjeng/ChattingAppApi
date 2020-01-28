const http = require('http');
const port = process.env.PORT || 3000;
const express= require('express');
const app = express();
const morgan = require('morgan');
const chatRoute = require('./route/chat');
const useRoute = require('./route/user');
const bodypaser = require('body-parser');
const cors = require('cors');
const mongoose =require('mongoose');


app.use(morgan('dev'));
app.use(bodypaser.urlencoded({extended:false}));
app.use(bodypaser.json());
app.options('*', cors());
mongoose.connect('mongodb://localhost:27017/ChattingApp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use('/Chat',chatRoute);
app.use('/User',useRoute);

app.use((req,res,next)=>
{
    const error = new Error('Not found ');
    error.status=404;
    next(error);
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});
const server = http.createServer(app);
server.listen(port);