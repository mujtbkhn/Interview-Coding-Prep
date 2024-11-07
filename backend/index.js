const express = require('express')
const Product = require('./models/product')
const User = require('./models/user and order');
const Order = require('./models/user and order');
const app = express()

app.use(express.json())

// User routes
app.post('/api/users', async (req, res, next) => {
    try {
        const { name, email, address } = req.body;
        if (!email || !address) {
            return res.status(400).json({
                success: false,
                message: 'Email and address are required'
            });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'Email already exists'
            });
        }

        const user = new User({ name, email, address });
        await user.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        next(error);
    }
});

try {
    app.get('/api/users/:id/orders', async (req, res, next) => {
        const userId = req.params;
        if (!userId) {
            return res.status(404).json({
                message: 'invalid userId'
            })
        }
        const user = User.findOne({ userId })
        if (!user) {
            return res.status(404).json({
                message: 'no user with this id'
            })
        }

        const userSpecificOrders = await Order.find({ user: userId }).populate('products')
        if (!userSpecificOrders) {
            return res.status(404).json({
                message: 'no orders by this user'
            })
        }

        return res.status(200).json({
            userSpecificOrders
        })
    })
} catch (error) {
    next(error)
}

try {
    app.post('/api/orders', async (req, res, next) => {
        const { userId, totalAmount, products } = req.body;
        if (!userId || !totalAmount || !Array.isArray(products) || products) {
            return res.status(404).json({
                message: 'userId, totalAmount, products are required'
            })
        }

        const order = await new Order({
            userId, totalAmount, products
        })
        await order.save();

        return res.status(200).json({
            message: "order created",
            order
        })
    })
} catch (error) {
    next(error)
}

try {
    app.get('/api/orders', async (req, res, next) => {
        const orders = await Order.find().populate('user').populate('products')
        return res.status(200).json({
            message: "orders",
            orders
        })
    })

} catch (error) {
    next(error)
}

try {
    app.get('/api/products', async (req, res, next) => {
        const { min, max, category, inStock, sort } = req.query;

        let query = {}
        //price
        if (min !== "undefined") query.min = Number(req.query.min)
        if (max !== "undefined") query.max = Number(req.query.max)

        //category
        if (category) {
            query.category = category;
        }

        //in-stock
        if (inStock !== "undefined") {
            query.inStock = inStock === "true"
        }

        let sortOption = {}
        if (sort === "asc") {
            sortOption.price = 1
        } else if (sort === "desc") {
            sortOption.price = -1
        }

        const products = await Product.find(query).sort(sortOption)

        return res.status(200).json({
            message: "Products retrieved successfully",
            count: products.length,
            products
        });
    })
} catch (error) {
    next(error)
}

const errorHandler = async (err, req, res, next) => {
    console.log(err.stack)

    let status = 500
    let message = 'Internal server error';

    if (err.name = "ValidationError") {
        status = 400;
        message = err.message
    } else if (err.name = "CastError") {
        status = 400
        message = 'Invalid Id'
    } else if (err.kind = "ObjectId") {
        status = 400;
        message = 'Resource not found'
    }

    res.status(status).json({
        success: false,
        message: message
    })
}

app.use(errorHandler)

app.listen(5000, () => {
    console.log('server started on PORT 5000')
})