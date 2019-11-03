const express = require('express');
const postController = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.post('/', (req,res) => {
   const { name, title, image, content } = req.body;
   
   postController.create({ name, title, image, content })
      .then(postCreated => {
         res.json({
            success: true,
            data: postCreated
         })
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         })
      })
})
// read all
postRouter.get('/', (req,res) => {
   postController.getList()
      .then(listPost => {
         res.json({
            success: true,
            data: listPost
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
})
// read one
postRouter.get('/:_id', (req,res) => {
   const { _id } = req.params;
   postController.getById({ _id })
      .then(postDetail => {
         res.json({
            success: true,
            data: postDetail
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         });
      })
})
//update
postRouter.put('/:_id', (req,res) => {
   const {_id} = req.params;
   const { name, title, imaga, content} = req.body;
   postController.update({_id}, { name, title, imaga, content})
      .then(postUpdated => {
         res.json({
            success: true,
            data: postUpdated
         });
      })
      .catch(error => {
         res.json({
            success: false,
            data: error
         })
      })
})
// deletes
postRouter.delete('/:_id', (req,res) => {
   const _id = req.params;
   postController.remove({_id})
      .then(() => {
         res.json({
            success: true
         });
      })
      .catch(() => {
         res.json({
            success: false
         })
      })
})

module.exports = postRouter;