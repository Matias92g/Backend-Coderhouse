import { Router } from "express";
import CartManagerDB from "../../dao/db/managers/cartManagerDb";
const routerCart = Router()
const cm = new CartManagerDB()

routerCart.post('/', cm.addCart)
routerCart.get('/:cid', cm.getCartById)
routerCart.post('/:cid/products/:pid', cm.addProductToCart)

export default routerCart
