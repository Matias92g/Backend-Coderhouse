import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product: {
        type: String,
        require: true,
        id: {
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            require: true
        }
    }
})

const Cart = mongoose.model('carts', cartSchema)

export default Cart