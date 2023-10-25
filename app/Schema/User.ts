import { Schema, model } from "mongoose"

const UserSchema = new Schema({
    id: {type: Number}, 
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, require: true},
    createdAt: { type: Date, default: Date.now() }
})

export default model("users", UserSchema)