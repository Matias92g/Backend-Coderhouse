import express from "express";
import usersRouter from "./routes/users.routes.js"
import routerProd from "./routes/products.routes.js";
import routerCart from "./routes/carts.routes.js";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createServer } from "http"
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 8080
const app = express()
const server = createServer(app)

// Carpeta estatic
app.use(express.static(__dirname + './public'))
//Motor de Plantillas 
app.engine('handlebars', engine()); //inicializa
app.set('view engine', 'handlebars'); //indica que dentro de la carpeta tendremos archivos handlebars
app.set('views', (__dirname, './views'));  //ubicación de la carpeta 
// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/// Routes 
app.use('/api/products', routerProd)
app.use('/api/carts', routerCart)
app.use('/users', usersRouter)
// Socket
const io = new Server(server)
io.on('connection', (socket) => {
    console.log('User conectado')
})

server.listen(PORT, () => { console.log(`Server run in port ${PORT}`) })  