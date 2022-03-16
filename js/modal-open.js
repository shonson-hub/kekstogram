import { isEscEvent } from "./util.js";

const uploadFile = document.querySelector('#upload-file')
const uploadOverlay = document.querySelector('.upload-overlay')
const body = document.querySelector('body')
const uploadFormCancel = document.querySelector('.upload-form-cancel')

uploadFile.addEventListener('click', () => {
  uploadOverlay.classList.remove('hidden')
  body.classList.add('modal-open')

})

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault()
    uploadOverlay.classList.add('hidden')
    body.classList.remove('modal-open')
  }
})

uploadFormCancel.addEventListener('click', () => {
  uploadOverlay.classList.add('hidden')
  body.classList.remove('modal-open')
})
