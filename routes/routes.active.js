const express = require('express');
const activeController = require('../controllers/active.controller');

const activeRouter = express.Router();

activeRouter.post('/', (req, res) => {
   const { comments } = req.body;
   activeController.create({ comments })
      .then(activeCreated => {
         res.json({
            success : true,
            data: activeCreated
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
})

activeRouter.get('/', (req,res) => {
   activeController.getList()
      .then(activeList =>{
         res.json({ 
            success: true,
            data: activeList
         })
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         })
      })
})

activeRouter.put('/:_id', (req,res) => {
   const {_id} = req.params;
   const { likes, views, comments} = req.body;
   activeController.update({_id}, { likes, views, comments})
      .then(activeUpdated => {
         res.json({
            success: true,
            data: activeUpdated
         })
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         })
      })
});


module.exports = activeRouter;