const ratings = document.querySelectorAll('.rating')
ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
        unselectAllRating()
        rating.classList.remove('rating--unselected')
        rating.classList.add('rating--selected')
    })
})

function unselectAllRating () {
    ratings.forEach((rating) => {
        rating.classList.remove('rating--selected')
        rating.classList.add('rating--unselected')
    })
}

const submit = document.querySelector('.button')
submit.addEventListener('click', () => {
    const selection = document.querySelector('.rating--selected')
    if (selection) {
        renderThanks(selection.innerHTML)
    }
    else {
        alert('Please select a rating');
    } 
})

function renderThanks(rating) {
    const main = document.querySelector('main')
    main.innerHTML = `<div class="card grid text-center">
    <picture class="card__image">
      <img src="images/illustration-thank-you.svg" alt="Review successfull! Thank you">
    </picture>

    <div class="selection-area">You selected <span class="selection">${rating}</span> out of 5 </div>

    <div class="thanks__text">
      <h2 class="title">Thank you!</h2>
      <p class="content">We appreciate you taking the time to give a rating. If you ever need more support,
        don't hesitate to get in touch!</p>
    </div>
    </div>`
}
