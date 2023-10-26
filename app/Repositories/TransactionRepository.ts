import Transaction from "App/Schema/Transaction"

async function create(data) {
    return Transaction.create(data)
}

export default {
    create
}