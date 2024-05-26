import mongoose from "mongoose";


export const Connection = async () => {
    const URL = "mongodb+srv://omkarawasthi67:4l3UPuxHCvGRcpjW@cluster0.hecomqt.mongodb.net/Ecommerce-web";
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