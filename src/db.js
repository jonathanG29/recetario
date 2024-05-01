import mongoose from 'mongoose'


// conexion a la base de datos de mongo
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/recet_db');
        console.log(">>> DB is connected"); // si se conecta mostramos un mensaje por consola
    } catch (error) {
        console.log(error);
    }
};