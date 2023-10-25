import AuthRepository from "App/Repositories/AuthRepository"
import bcrypt from "bcrypt"

async function signup(body: any) {
    const hasPassword = bcrypt.hashSync(body.password, 10)

    const userExists = await AuthRepository.findByEmail(body.email)
    
    if (userExists) throw new Error("User already exists")

    return await AuthRepository.create({ ...body, password: hasPassword }) // do que vier do repository
}

export default {
    signup
}

// type UserBody = {
//     body: Object
// }