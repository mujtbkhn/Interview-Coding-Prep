const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)
module.exports = User

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    totalAmount: {
        type: Number,
        required: true
    },
    products: [{
        ref: 'Product',
        type: mongoose.Schema.Types.ObjectId,

    }]
})

const Order = mongoose.model('Order', OrderSchema)
module.exports = Order