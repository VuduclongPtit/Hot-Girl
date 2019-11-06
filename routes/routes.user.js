const express = require('express');
const userController = require('../controllers/user.controller');
const activeController = require('../controllers/active.controller')
const userRouter = express.Router();


//crud

userRouter.post('/', (req,res) => {
   const { name, username, password, email } = req.body;

   userController.create({name, username, password, email})
      .then(userCreated => {
         res.json({
            success: true,
            data: userCreated
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
});

//get
userRouter.get('/', (req,res) => {
   userController.getList()
      .then(userList => {
         res.json({
            success: true,
            data: userList
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
});

//get one
userRouter.get('/:_id', (req,res) => {
   const _id = req.params.id;
   // console.log(_id)
   userController.getById(_id)
      .then(user => {
         res.json({
            success: true,
            data: user
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
});
//Update

userRouter.put('/:_id', (req,res) => {
   const { _id } = req.params.id
   const { name, password, email } = req.body
   userController.update({_id}, { name, password, email } )
      .then(userUpdated => {
         res.json({
            success: true,
            data: userUpdated
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
});

// delete

userRouter.put('/:_id', (req,res) => {
   const { _id } = req.params
   userController.remove({_id})
      .then(() => {
         res.json({
            success: true,
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
});

module.exports = userRouter
