const express = require('express');
const loginRouter = express.Router();
const path = require('path');

loginRouter.get('/', (req, res) => {
   if(req.session && req.session.userInfo) {
      // const { name } = req.session.userInfo;
      res.send(`<h1>welcome back ${req.session.userInfo.name}</h1>`);
   }
   else {
      res.sendFile(path.join(__dirname , "../views" , "login.html"));
   }
})

module.exports = loginRouter