import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    code: {
        type: String,
        require: true,
        unique: true,
    },
    category: {
        type: String,
        require: true,
        enum: ['Futbol', 'Basquet', 'Tenis']
    },
    stock: {
        type: Number,
        default: 10
    },
    thumbnails: {
        type: []
    },
    status: {
        type: Boolean
    }
})

const Product = mongoose.model('products', ProductSchema)

export default Product