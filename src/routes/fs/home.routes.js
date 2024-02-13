import { Router } from "express";
import { ProductManager } from "../../dao/fileSystem/productManager.js";

const homeRouter = Router();
const productManager = new ProductManager('./products.json');

homeRouter.get("/", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    res.status(200).render("home", {
      products: products,
    });
  } catch (error) {
    res.status(500).render("home", {
      products: [],
      error: `No se pudieron cargar los productos: ${error}`,
    });
  }
});

export default homeRouter;
