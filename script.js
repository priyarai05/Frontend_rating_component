const rate = document.querySelectorAll('li')
const submit_button = document.querySelector('#submit')
const main_page = document.querySelector('.feedback')
const thankyou = document.querySelector('.thankyou')
const rating = document.querySelector('#rating')

for (let i = 0; i < rate.length; i++) {
    rate[i].addEventListener('mouseover', function () {
        rate[i].style.background = 'hsl(25, 97%, 53%)'
        rate[i].style.color = 'white'
        if (i > 0) {
            rate[i - 1].style.background = 'hsl(216, 12%, 54%)'
            rate[i - 1].style.color = 'white'
        }

    })
    rate[i].addEventListener('mouseout', function () {
        rate[i].style.background = 'hsl(213, 19%, 18%)'
        rate[i].style.color = 'hsl(217, 12%, 63%)'
        if (i > 0) {
            rate[i - 1].style.background = 'hsl(213, 19%, 18%)'
            rate[i - 1].style.color = 'hsl(217, 12%, 63%)'
        }
    })
    rate[i].addEventListener('click', function () {
        var point = rate[i].innerHTML
        rating.innerHTML = `You selected ${point} out of 5`
    })
}

submit_button.addEventListener('click', function () {
    main_page.classList.add('tgl')
    thankyou.classList.remove('tgl')
})