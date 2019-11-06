const postModel = require('../models/model.post');

function create(post) {
   return postModel.create(post);
}

function getList() {
   return postModel.find({},{
      'author': 1,
      'active': 1,
      'title': 1
   })
      .populate(
         'author',
         {
            "name": 1,
            "username": 1
            // 'password': 0
         }
      )
      .populate('active');
}

function getById(postId) {
   return postModel.findById(postId);
}

function update(postId, updateData) {
   return postModel.findByIdAndUpdate(postId, updateData);
}

function remove( postId ) {
   return postModel.findByIdAndRemove(postId);
}

module.exports = {
   create,
   getList,
   getById,
   update,
   remove
}