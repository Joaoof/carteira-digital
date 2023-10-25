import UserSchema from "../Schema/User"


async function create(data: string) {
    return await UserSchema.create(data)
}

async function findByEmail(email: string) {
    return  await UserSchema.findOne({ email })
}

export default {
    create, findByEmail
}

