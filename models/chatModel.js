const { name } = require('ejs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    is_online: {
      type: String,
      default: "0",
    },

    message: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
