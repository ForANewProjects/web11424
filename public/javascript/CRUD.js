function deletee(id) {
    let deleteForm = document.getElementById('deleteForm')
    deleteForm.action = '/delete/' + id + '/'

    var deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'), {
        keyboard: true,
    })
    deleteModal.toggle()
}

async function updatee(id) {
    fetch('https://web11424.herokuapp.com/api/' + id)
    .then(response => response.json())
    .then(data => 
        showInfo(data[0])
    );
}

function showInfo(data){
    let docTitle = document.getElementById('cheque-title')
    let docReminder = document.getElementById('cheque-reminder')
    let docPrice = document.getElementById('cheque-update-price')
    let docWallet = document.getElementById('cheque-update-wallet')
    let docCategory = document.getElementById('cheque-update-category')
    let updateForm = document.getElementById('cheque-update-form')
    updateForm.action = '/update/' + data.id
    docTitle.value = data.title
    docReminder.value = data.reminder
    docPrice.value = data.price
    docWallet.value = data.wallet
    docCategory.value = data.category

    var updateModal = new bootstrap.Modal(document.getElementById('updateModal'), {
        keyboard: true,
    })
    updateModal.toggle()
}

