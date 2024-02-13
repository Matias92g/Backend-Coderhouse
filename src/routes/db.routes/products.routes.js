import { Router } from "express";
import Products from "../../dao/db/models/product.model.js";


const routerProdDb = Router()
routerProdDb.get('/allProducts', async (req, res) => {
    try {
        let resp = await Products.find()
        res.send ({
            msg: 'Estos son los productos encontrados',
            data: resp
        })
    } catch (error) {
        console.log (error)
    }
})

routerProdDb.post('/createProduct', async (req, res)=>{
    try {
        await Products.create(req.body)
        res.status(201).send({
            msg: "Producto creado exitosamente!",
            data: req.body
        })
    } catch (err) {
        console.log(err)
    }
})
/*
routerProdDb.get('/:id', async (req, res) => {
    const { id } = req.params
    const prod = await productManager.getProductsById(id)

    if (prod) {
        res.status(200).send(prod)
    }
    else {
        res.status(404).send('Producto no encontrado!')
    }
})

routerProd.post('/', async (req, res) => {
    const conf = await productManager.addProduct(req.body)
    if (conf) {
        res.status(201).send("Producto creado correctamente!")
    }
    else {
        res.status(400).send("El producto ya existe!")
    }
})

routerProd.put('/:id', async (req, res) => {
    const { id } = req.params
    const conf = await productManager.updateProduct(id, req.body)
    if (conf) {
        res.status(201).send("Producto actualizado correctamente!")
    }
    else {
        res.status(404).send("Algo salió mal.! No se pudo actualizar el producto")
    }
})

routerProd.delete('/:id', async (req, res) => {
    const { id } = req.params
    const conf = await productManager.deleteProduct(id)

    if (conf) {
        res.status(200).send("Producto eliminado correctamente")
    } else {
        res.status(404).send("Algo salió mal.! No se pudo eliminar el producto")
    }
})
*/
export default routerProdDb