import { Router } from "express";
import ProductManagerDb from "../../dao/db/managers/productManagerDb.js";

const pm = new ProductManagerDb()
const routerProdDb = Router();

routerProdDb.get('/allProducts', pm.getProducts)
routerProdDb.post('/createProduct', pm.addProduct)
routerProdDb.put('/:code', pm.updateProduct)
routerProdDb.get('/:code', pm.getProductsByCode)
routerProdDb.delete('/:code', pm.deleteProduct)

export default routerProdDb