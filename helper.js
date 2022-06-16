let sqlite = require('./Sqlite')
let spendingDB = sqlite.database
let spendingManager = require("./models")
spendingDB.sync().then(() => console.log("[ SUCCESSFULLY CONNECTED TO SPENDINGS DATABASE IN HELPER.JS ]"))


async function Statistics() {
    let REGULAR = 0
    let regularWallets = await spendingManager.Spendings.findAll({
        where: {
            wallet: 1
        }
    })
    for (let i in regularWallets) {
        let priceRegular = regularWallets[i].price
        REGULAR += priceRegular
    }

    let INVESTMENT = 0
    let investmentWallets = await spendingManager.Spendings.findAll({
        where: {
            wallet: 2
        }
    })
    for (let a in investmentWallets) {
        let priceInvestment = investmentWallets[a].price
        INVESTMENT += priceInvestment
    }

    let overall = [{
        regular: REGULAR,
        investment: INVESTMENT
    }]

    return overall

}


async function Categories () {
    let BILLS = 0
    let billCategory = await spendingManager.Spendings.findAll({
        where: {
            category: 1
        }
    })
    for (let i in billCategory) {
        let billCheque = billCategory[i].price
        BILLS += billCheque
    }


    let SHOPPINGS = 0
    let shoppingCategory = await spendingManager.Spendings.findAll({
        where: {
            category: 2
        }
    })
    for (let i in shoppingCategory) {
        let shoppingCheque = shoppingCategory[i].price
        SHOPPINGS += shoppingCheque
    }


    let RESTAURANT = 0
    let restaurantCategory = await spendingManager.Spendings.findAll({
        where: {
            category: 3
        }
    })
    for (let i in restaurantCategory) {
        let restaurantCheque = restaurantCategory[i].price
        RESTAURANT += restaurantCheque
    }


    let EDUCATION = 0
    let eduCategory = await spendingManager.Spendings.findAll({
        where: {
            category: 4
        }
    })
    for (let i in eduCategory) {
        let eduCheque = eduCategory[i].price
        EDUCATION += eduCheque
    }

    let overall = [{
        bills: BILLS,
        shoppings: SHOPPINGS,
        restaurants: RESTAURANT,
        education: EDUCATION
    }]

    return overall
}


async function create(title, reminder, wallet, category, price) {
    try{
        await spendingManager.Spendings.create({
            title: title,
            reminder: reminder,
            wallet: wallet,
            category: category,
            price: price
        })
        return true
    }catch {
        return false
    }
}

async function deletee(id) {
    await spendingManager.Spendings.destroy({where: {id:id}})
}

async function updatee(id, title, reminder, price, wallet, category) {
    await spendingManager.Spendings.update({
        title: title,
        reminder: reminder,
        price: price,
        wallet: wallet,
        category: category
    }, {where: {id: id}})
}

module.exports = {Statistics, Categories, create,deletee, updatee}