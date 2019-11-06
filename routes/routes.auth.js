const express = require('express');
const authRouter = express.Router();
const userController = require('../controllers/user.controller');
const bcrypt = require('bcrypt');
// sign-in

authRouter.post('/signin', (req, res) => {
   const {username , password} = req.body;
   userController.getOne({username})
      .then(userFounded => {
         if(!userFounded || !userFounded._id){
            res.json({
               success: false,
               error: "user not found"
            });
         }
         else {
            if (bcrypt.compareSync(password, userFounded.password)) {
               req.session.userInfo = {
                  id: userFounded._id,
                  name: userFounded.name,
                  username: userFounded.username
               }
               res.json({
                  success: true,
                  data: userFounded.name
               })
            }
            else {
               res.json({
                  success: false,
                  error: "wrong password"
               })
            }
         }
      })
      .catch(error => {
         res.json({
            success: false,
            error
         })
      })
})

authRouter.get('/check', (req,res) => {
   if( req.session.userInfo && req.session) {
      const { id } = req.session.userInfo;
      userController.getById({ id })
         .then(userFounded => {
            if( !userFounded || !userFounded._id){
               res.json({
                  success: false
               })
            }
            else{
               res.json({
                  success: true
               })
            }
         })
         .catch(error => {
            res.json({
               success: false,
            })
         })
   }else {
      res.json({
         success: false,
         error: "m chua dang nhap"
      })
   }
})

module.exports = authRouter;