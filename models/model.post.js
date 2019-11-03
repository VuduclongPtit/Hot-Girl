const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
   {
      name: {
         type: String,
         require: true
      },
      title: {
         type: String
      },
      image: {
         type: String,
         require: true
      },
      content: {
         type: String
      },
      author: {
         type: mongoose.Schema.Types.ObjectId,
         require: true,
         ref: 'User'
      },
      active:{
         type: mongoose.Schema.Types.ObjectId,
         require: true,
         ref: 'Active'
      }
   },
   {
      timestamps: true
   }   
)
const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;