import express from "express";
import handlerbars from "express-handlebars";
import homeRouter from "./routes/home.routes.js";
import routerProd from "./routes/products.routes.js";
import routerCart from "./routes/carts.routes.js";
import realTimeRouter from "./routes/realTimeProducts.routes.js";
import { fileURLToPath } from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import { ProductManager } from "./models/productManager.js";

const PORT = 8080
const app = express()
const server = http.createServer(app)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pm = new ProductManager()

// Carpeta estatic
app.use(express.static(path.join(__dirname, '/public')))

//Motor de Plantillas 

app.engine('handlebars', handlerbars.engine()); //inicializa
app.set('view engine', 'handlebars'); //indica que dentro de la carpeta tendremos archivos handlebars
app.set('views', (__dirname, './views'));  //ubicación de la carpeta 
// Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/// Routes 
app.use('/api/products', routerProd)
app.use('/api/carts', routerCart)
app.use('/home', homeRouter)
app.use('/realTimeProducts', realTimeRouter)


// Socket
const io = new Server(server)
io.on('connection', (socket) => {
    console.log('Cliente conectado')
    socket.on("getProducts", async () => {
        const products = await pm.getProducts();
        io.emit("prodsData", products);
    });
    socket.on("newProduct", async (newProd) => {
        console.log(newProd);
        await pm.addProduct(newProd);
        const products = await pm.getProducts();
        io.emit("prodsData", products);
    });
    socket.on("removeProduct", async (prodId) => {
        await pm.deleteProduct(prodId);
        io.emit("productRemoved", prodId);
    });

})

//Servidor Local
server.listen(PORT, () => console.log(`Server run in port ${PORT}`))