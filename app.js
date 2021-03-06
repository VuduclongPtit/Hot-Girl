const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

const userRouter = require('./routes/routes.user');
const postRouter = require('./routes/routes.post');
const activeRouter  = require('./routes/routes.active');
const authRouter = require('./routes/routes.auth');
const loginRouter = require('./routes/routes.login')

const app = express();
const port = 8080;

app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")));

app.use(session({
   secret: "dviue344qhw832ry2e",
   resave: false,
   saveUninitialized: false,
   cookie: {
      maxAge: 7*24*60*60*1000
   }
}))

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

app.use((req, res, next) => {
  console.log(req.sessionID)
  console.log(req.session);
  next(); 
})


app.use('/', loginRouter);

app.use('/api/users', userRouter);
app.use('/api/post', postRouter);
app.use('/api/active', activeRouter), 
app.use('/api/auth', authRouter)

app.listen(port, (err) => {
   if(err) console.log(err)
})

module.exports = app;