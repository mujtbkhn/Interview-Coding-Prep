const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // _id : provided by mongoose
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    }
})

const User = mongoose.model('User', UserSchema)

const DriverSchema = new mongoose.Schema({
    // _id : provided by mongoose
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    }
})

const Driver = mongoose.model('Driver', DriverSchema)

const RideSchema = new mongoose.Schema({
    // _id : provided by mongoose
    start: {
        type: String,
    },
    end: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    },
    cost: {
        type: Number
    },
    status: {
        type: String,
        enum: ['completed', 'cancelled', 'in-progress']
    },
    user: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    driver: {
        ref: 'Driver',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const Ride = mongoose.model('Ride', RideSchema)
