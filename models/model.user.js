const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      name: {
         type: String,
         require: true,
         unique: true
      },
      username: {
         type: String,
         require: true,
         unique: true
      },
      password: {
         type: String,
         require: true
      },
      email: {
         type: String,
         require: true, 
         unique: true
      },
   },
   {
      timestamps: true
   }
)

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;