const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
   {
      content: {
         type: String,
         require: true
      },
      author: {
         type: mongoose.Schema.Types.ObjectId,
         require: true,
         ref: 'User'
      }
   },
   {
      timestamps: true
   }
)

const activeSchema = new Schema(
   {
      likes: {
         type: Number,
         default: 0
      },
      views: {
         type: Number,
         default: 0
      },
      comments:[commentSchema],
   }
)

const activeModel = mongoose.model('Active',activeSchema);
module.exports = activeModel;