let { DataTypes } = require('sequelize')

let database = require('./Sqlite')

let sendingsDB = database.database

let Spendings = sendingsDB.define('Spendings', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    reminder : {
        type: DataTypes.STRING,
    },
    wallet:{
        type: DataTypes.NUMBER,
        // 1 --> Regular
        // 2 --> Investment
    },
    category: {
        type: DataTypes.NUMBER,
        // 1 --> Bills
        // 2 --> Shopping
        // 3 --> Restaurant
        // 4 --> Education
    },
    price: {
        type: DataTypes.NUMBER,
    },
},{
    tableName: 'Spendings'
})

module.exports = {Spendings,}
