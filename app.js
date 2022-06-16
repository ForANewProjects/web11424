let express = require('express')
let app = express()
const path = require("path")

let helper = require('./helper')

const transaction = require("./routes/transaction");
const api = require("./routes/api");

let sqlite = require('./Sqlite')
let spendingDB = sqlite.database
let spendingManager = require("./models")
spendingDB.sync().then(() => console.log("[ SUCCESSFULLY CONNECTED TO SPENDINGS DATABASE ]"))

app.set("view-engine", "pug");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use('/transaction', transaction)
app.use('/api', api)


let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain);


/* =============== */ 
/* - ENTRY PATH -- */
/* =============== */ 
app.get('/', (req, res) => {
    res.redirect('/c/all/')
})
/* =============== */ 
/* - ENTRY PATH -- */
/* =============== */ 



/*   =============== */ 
/* - CATEGORY FILTER - */
/*   =============== */ 
app.get('/c/:category', async (req, res) => {
    if(req.params.category == 'all') {
        var spendings = await spendingManager.Spendings.findAll({})
    }else{
        var spendings = await spendingManager.Spendings.findAll({
            where: {wallet: req.params.category}
        })
    }
    let statisics = await helper.Statistics()
    let categories = await helper.Categories()
    res.render('index.pug', {
        spendings:spendings, 
        statisics: statisics, 
        categories: categories,
        currectCategory: req.params.category
    })
})
/*   =============== */ 
/* - CATEGORY FILTER - */
/*   =============== */ 



/* =============== */ 
/* - CREATE PATH - */
/* =============== */ 
app.post('/create/', async (req, res) => {
    let form = req.body
    let result = helper.create(form.title, form.reminder, form.wallet, form.category, form.price)
    res.redirect('/')
})
/* =============== */ 
/* - CREATE PATH - */
/* =============== */ 


/* =============== */ 
/* - DELETE PATH - */
/* =============== */ 
app.post('/delete/:id/', async (req, res) => {
    await helper.deletee(req.params.id)
    res.redirect('/')
})
/* =============== */ 
/* - DELETE PATH - */
/* =============== */ 


/* =============== */ 
/* - DELETE PATH - */
/* =============== */ 
app.post('/update/:id/', async (req, res) => {
    let id = req.params.id
    let form = req.body
    await helper.updatee(id, form.title, form.reminder, form.price, form.wallet, form.category)
    res.redirect('/transaction/' + id)
})
/* =============== */ 
/* - DELETE PATH - */
/* =============== */ 


var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    console.log('Server is running on port:' + port)
})