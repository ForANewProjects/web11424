const express = require("express");
const router = express.Router();

let helper = require('../helper')

let sqlite = require('../Sqlite')
let spendingDB = sqlite.database
let spendingManager = require("../models")
spendingDB.sync().then(() => console.log("[ SUCCESSFULLY CONNECTED TO SPENDINGS DATABASE IN ROUTER/transaction.js ]"))

router.get("/:id", async (req, res) => {
    let transaction = await spendingManager.Spendings.findAll({where: {id: req.params.id}})
    let statisics = await helper.Statistics()
    let categories = await helper.Categories()
    res.render('transaction.pug', {transaction:transaction,statisics:statisics, categories:categories})
})

module.exports = router;