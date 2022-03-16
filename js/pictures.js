import { cardObjects } from './data.js'
import { showPictures } from './big-picture.js'

const pictureTemplate = document.querySelector('#picture-template').content.querySelector('.picture')
const pictureList = document.querySelector('.pictures')
// const bigPicture = document.querySelector('.gallery-overlay')

const similarCards = cardObjects()

const similarCardsList = document.createDocumentFragment()

similarCards.forEach((card) => {
  const cardObject = pictureTemplate.cloneNode(true)
  cardObject.querySelector('img').src = card.photo
  cardObject.querySelector('.picture-likes').textContent = card.likes
  cardObject.querySelector('.picture-comments').textContent = card.comments.length

  similarCardsList.appendChild(cardObject)

  cardObject.addEventListener('click', (evt) => {
    evt.preventDefault()
    showPictures(card)
    // showComments(card)
    // bigPicture.classList.remove('hidden')

  })
})

pictureList.appendChild(similarCardsList)

