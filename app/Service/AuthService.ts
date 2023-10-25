import AuthRepository from "App/Repositories/AuthRepository"
import bcrypt from "bcrypt"

async function signup(body: any) {
    const hasPassword = bcrypt.hashSync(body.password, 10)

    const userExists = await AuthRepository.findByEmail(body.email)

    if (userExists) throw new Error("User already exists")

    return await AuthRepository.create({ ...body, password: hasPassword }) // do que vier do repository
}

async function signin(body: any) {
    const user = await AuthRepository.findByEmail(body.email)
    if (!user) throw new Error("Email or Password incorret")
    
    const password = bcrypt.compareSync(body.password, user.password ?? '')
    if (!password) throw new Error("Email or Password incorret")

    return AuthRepository.generateToken(user._id)
}

export default {
    signup,
    signin
}

// type UserBody = {
//     body: Object
// }