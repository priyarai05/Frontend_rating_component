const rate = document.querySelectorAll('li')
const submit_button = document.querySelector('#submit')
const main_page = document.querySelector('.feedback')
const thankyou = document.querySelector('.thankyou')
const rating = document.querySelector('#rating')

var select = false

rate.forEach(element => {
    element.addEventListener('click', function () {
        select = true

        const currentlySelectedEle = document.querySelector('.selected')
        if (currentlySelectedEle) {
            currentlySelectedEle.classList.remove('selected')
        }
        element.classList.add('selected')
        var point = element.innerHTML
        rating.innerHTML = `You selected ${point} out of 5`
    })
});

submit_button.addEventListener('click', function () {
    if (select) {
        main_page.classList.add('tgl')
        thankyou.classList.remove('tgl')
    }
})