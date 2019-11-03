const userModel = require('../models/model.user');

function create(user) {
   return userModel.create(user);
}

function getList() {
   return userModel.find({});
}

function getById(userId) {
   return userModel.findById(userId);
}

function update(userId, updateData) {
   return userModel.findByIdAndUpdate(userId, updateData);
}

function remove(userId) {
   return userModel.findByIdAndRemove(userId);
}

module.exports = {
   create,
   getList,
   getById,
   update,
   remove
}