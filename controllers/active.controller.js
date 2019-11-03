const activeModel = require('../models/model.active');

function create(active) {
   return activeModel.create(active);
}

function getList() {
   return activeModel.find({});
}

function getById(activeId) {
   return activeModel.findById(activeId);
}

function update(activeId, dataUpdate) {
   return activeModel.findByIdAndUpdate(activeId, dataUpdate);
}

module.exports = {
   create,
   getList,
   getById,
   update
}