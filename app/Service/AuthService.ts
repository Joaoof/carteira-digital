import AuthRepository from "App/Repositories/AuthRepository"
import bcrypt from "bcrypt"

function signup(body: any) {
    const hasPassword = bcrypt.hashSync(body.password, 10)

   return AuthRepository.create({ ...body, password: hasPassword }) // do que vier do repository

}

export default {
    signup
}

// type UserBody = {
//     body: Object
// }