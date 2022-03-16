import { isEscEvent } from './util.js'

const bigPicture = document.querySelector('.gallery-overlay')
const galleryOverlayClose = document.querySelector('.gallery-overlay-close')
// const bidPictureContainer  = bigPicture.querySelector('.gallery-overlay-preview')
const socialCaption = bigPicture.querySelector('.bigPicture.querySelector > span')

// export const showComments = (card) => {
//   const comments = document.createElement('li')
//   comments.classList.add('social__comment')
//   const commentObj = comments.createElement('img')
//   commentObj.classList.add('social__picture')
//   commentObj.src = card.avatar
//   commentObj.alt = card.name
//   commentObj.style.width="35px".height="35px"
// }

// export const renderComments = (comments) => {
//   bigPicture.cloneNode(true)


// }

export const showPictures = (card) => {
  bigPicture.classList.remove('hidden')
  bigPicture.querySelector('.gallery-overlay-image').src = card.photo
  bigPicture.querySelector('.likes-count').textContent = card.likes
  bigPicture.querySelector('.comments-count').textContent = card.comments.length
  showComments(card)
}

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault()
    bigPicture.classList.add('hidden')
  }
})

galleryOverlayClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden')
})
