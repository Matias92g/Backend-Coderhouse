import Cart from "../models/cartModel.js"

class CartManagerDB {

    async addCart(res, req) {
        try {
            let newCart = await Cart.create(req.body);
            if (!newCart)
                return res.status(201).send({
                    msg: "Carrito creado exitosamente!",
                    data: newCart
                });
        } catch (err) {
            console.log(err);
        }
    }
    async getCartById(res, req) {
        const { cid } = req.params
        const cart = await Cart.findById(cid)
        if (cart) {
            res.status(200).json(cart)
        } else {
            res.status(404).send('No se puedo encontrar carrito con el ID ingresado')
        }
    }
    async addProductToCart() {
    }
}
export default CartManagerDB;