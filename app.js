const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRouter = require('./routes/routes.user');
const postRouter = require('./routes/routes.post');
const activeRouter  = require('./routes/routes.active');

const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/hotgirl',
   {
      useNewUrlParser:true,
      useFindAndModify: true
   },
   (err) => {  
      if(err) console.log(err)
      else console.log("ok")
   }
);

app.use('/api/users', userRouter);
app.use('/api/post', postRouter);
app.use('/api/active', activeRouter), 

app.listen(port, (err) => {
   if(err) console.log(err)
})