const db = require('../../data/dbConfig')

function findBy(filter) {
    return db('users').where(filter).orderBy('id')
}
function getById(id) {
    return db('users').where({ id }).first()
}
async function createUser(user) {
    const [ id ] = await db('users').insert(user)
    return getById(id)
}

module.exports = {
    findBy,
    getById,
    createUser
}