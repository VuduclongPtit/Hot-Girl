const userModel = require('../models/model.user');
const bcrypt = require('bcrypt');
function create(user) {
   const plainPassword = user.password;
   const salt = bcrypt.genSaltSync(10);
   const hashPassword = bcrypt.hashSync(plainPassword, salt);
   user.password = hashPassword;
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

function getOne(query) {
   return userModel.findOne(query);
}

module.exports = {
   create,
   getList,
   getById,
   update,
   remove,
   getOne
}