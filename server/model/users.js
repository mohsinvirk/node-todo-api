const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    email: {
        type: String,
        trim: true,
        required: true,
        minlength: 1
    }
});

module.exports = {Users};
