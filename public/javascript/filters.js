// FILTER CHEQUES BY CATEGORY 
let billCheques = document.querySelectorAll('.category-1')          /* BILLS */
let shoppingCheques = document.querySelectorAll('.category-2')      /* SHOPPINGS */
let restaurantCheques = document.querySelectorAll('.category-3')    /* RESTAURANTS */
let eduCheques = document.querySelectorAll('.category-4')           /* EDUCATIONS */

let billsChequeIsOpen = false
let shoppingChequeIsOpen = false
let restaurantChequeIsOpen = false
let eduChequeIsOpen = false



let regularWallets = document.querySelectorAll('.wallet-1')           /* REGULAR WALLET */
let investmentWallets = document.querySelectorAll('.wallet-2')        /* INVESTMENT WALLET */
let regularIsOpen = false
let investmentIsOpen = false

function hideAll() {
    regularWallets.forEach(regular => {
        regular.removeAttribute('style')
        regularIsOpen = false
    })
    investmentWallets.forEach(investment => {
        investment.removeAttribute('style')
        investmentIsOpen = false
    })
    eduCheques.forEach(eduCheque => {
        eduCheque.removeAttribute('style')
        eduChequeIsOpen = false
    })
    restaurantCheques.forEach(restaurantCheque => {
        restaurantCheque.removeAttribute('style')
        restaurantChequeIsOpen = false
    })
    shoppingCheques.forEach(shoppingCheque => {
        shoppingCheque.removeAttribute('style')
        shoppingChequeIsOpen =  false
    })
    billCheques.forEach(billCheque => {
        billCheque.removeAttribute('style')
        billsChequeIsOpen = false
    })
}



function regularWallet() {
    if (regularIsOpen == false) {
        hideAll()
        regularWallets.forEach(regular => {
            regular.setAttribute('style', 'background-color: rgb(112,51,255, .4) !important')
        })
        regularIsOpen = true
    }else {
        hideAll()
        regularWallets.forEach(regular => {
            regular.removeAttribute('style')
        })
        regularIsOpen = false
    }
}

function investmentWallet() {
    if (investmentIsOpen == false) {
        hideAll()
        investmentWallets.forEach(investment => {
            investment.setAttribute('style', 'background-color: rgb(253,187,163, .4) !important')
        })
        investmentIsOpen = true
    }else {
        hideAll()
        investmentWallets.forEach(investment => {
            investment.removeAttribute('style')
        })
        investmentIsOpen = false
    }
}

function showRestaurant() {
    if (restaurantChequeIsOpen == false) {
        hideAll()
        restaurantCheques.forEach(restaurantCheque => {
            restaurantCheque.setAttribute('style', 'background-color: rgb(48, 97, 255, 0.4) !important')
        })
        restaurantChequeIsOpen = true
    }else {
        hideAll()
        restaurantCheques.forEach(restaurantCheque => {
            restaurantCheque.removeAttribute('style')
        })
        restaurantChequeIsOpen = false
    }
}



function showShopping() {
    if (shoppingChequeIsOpen == false) {
        hideAll()
        shoppingCheques.forEach(shoppingCheque => {
            shoppingCheque.setAttribute('style', 'background-color: rgb(48, 97, 255, 0.4) !important')
        })
        shoppingChequeIsOpen = true
    }else {
        hideAll()
        shoppingCheques.forEach(shoppingCheque => {
            shoppingCheque.removeAttribute('style')
        })
        shoppingChequeIsOpen = false
    }
}


function showBills() {
    if (billsChequeIsOpen == false) {
        hideAll()
        billCheques.forEach(billCheque => {
            billCheque.setAttribute('style', 'background-color: rgb(48, 97, 255, 0.4) !important')
        })
        billsChequeIsOpen = true
    }else {
        hideAll()
        billCheques.forEach(billCheque => {
            billCheque.removeAttribute('style')
        })
        billsChequeIsOpen = false
    }
}


function showEducation() {
    if (eduChequeIsOpen == false) {
        hideAll()
        eduCheques.forEach(eduCheque => {
            eduCheque.setAttribute('style', 'background-color: rgb(48, 97, 255, 0.4) !important')
        })
        eduChequeIsOpen = true
    }else {
        hideAll()
        eduCheques.forEach(eduCheque => {
            eduCheque.removeAttribute('style')
        })
        eduChequeIsOpen = false
    }
}

