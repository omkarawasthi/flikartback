import mongoose from "mongoose";


export const Connection = async () => {
    const URL = "mongodb+srv://omkarawasthi67:2aI23Lu1dQyXqs4j@cluster0.hecomqt.mongodb.net/Ecommerce-web";
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("Database Connect Successfully.");
    }
    catch (error) {
        console.log("Error While Connection", error.message);
    }
}

export default Connection;