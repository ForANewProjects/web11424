let { Sequelize } = require('sequelize')

let database = new Sequelize('Spendings', 'admin', 'admin', {
    host: 'db.dqlite3',
    dialect: 'sqlite'
})

module.exports = {
    database,
}
