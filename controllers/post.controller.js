const postModel = require('../models/model.post');

function create(post) {
   return postModel.create(post);
}

function getList() {
   return postModel.find({});
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