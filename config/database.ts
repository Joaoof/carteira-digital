import mongoose from 'mongoose'

export async function connectDb() {
    const mongoUrl = "mongodb+srv://admin:admin@carteira-cluster.m6macxs.mongodb.net/?retryWrites=true&w=majority"

    try {
        await mongoose.connect(mongoUrl)
        console.log("Connectado com sucesso!");
    } catch (error) {
        console.log(error.message)
    }

}

export async function desconnectDb() {
    await mongoose.disconnect()
}