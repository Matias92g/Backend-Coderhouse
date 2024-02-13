import mongoose from "mongoose";

const Database = {
    connect: () => {
        return mongoose.connect("mongodb+srv://matias92meg:matias12345@ecommerce.lcog7kc.mongodb.net/ecommerce")
            .then((result) => {
                console.log("Base de datos conectada exitosamente!!!")
            }).catch((err) => {
                console.log(err)
            });
    }
}
export default Database