import mongoose from 'mongoose'
import Env from '@ioc:Adonis/Core/Env'

export async function connectDb() {
    try {
        await mongoose.connect(Env.get('DB_CONNECTION'))
        console.log("Connectado com sucesso!");
    } catch (error) {
        console.log(error.message)
    }

}

export async function desconnectDb() {
    await mongoose.disconnect()
}