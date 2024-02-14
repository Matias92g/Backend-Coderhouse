import Product from "../models/productModel.js";

class ProductManagerDb {
    async getProducts(req, res) {
        try {
            let resp = await Product.find();
            res.send({
                msg: 'Estos son los productos encontrados',
                data: resp
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getProductsByCode(req, res) {
        try {
            const code = req.params;
            const prod = await Product.findOne(code);
            if (prod) {
                res.status(201).send({
                    msg: "Producto encontrado:",
                    data: prod
                });
            }
            else {
                res.status(404).send({ msg: "El producto no existe" });
            }
        } catch (err) {
            console.log(err);
        }
    }

    async addProduct(req, res) {
        try {
            let newProduct = await Product.create(req.body);
            if (!newProduct)
                return res.status(201).send({
                    msg: "Producto creado exitosamente!",
                    data: newProduct
                });
        } catch (err) {
            console.log(err);
        }
    }

    async updateProduct(req, res) {
        const code = req.params;
        const conf = await Product.findOneAndUpdate(code, req.body);
        if (conf) {
            res.status(201).send("Producto actualizado correctamente!");
        }
        else {
            res.status(404).send("Algo salió mal.! No se pudo actualizar el producto");
        }
    }

    async deleteProduct(req, res) {
        try {
            const code = req.params;
            const prod = await Product.findOneAndDelete(code);
            if (prod) {
                res.status(201).send({
                    msg: "Producto eliminado exitosamente:",
                    data: prod
                });
            }
            else {
                res.status(404).send({ msg: "El producto no pudo ser eliminado" });
            }
        } catch (err) {
            console.log(err);
        }
    }
}
export default ProductManagerDb;
