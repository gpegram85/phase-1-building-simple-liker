// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartGlyphs = document.querySelectorAll(".like-glyph")
  for (const glyph of heartGlyphs) {
    glyph.addEventListener('click', handleLike)
  }

  function handleLike(e) {
    heartContainer = e.target
    mimicServerCall()
    .then(response => {
      if (response === "Pretend remote server notified of action!" && heartContainer.innerText === EMPTY_HEART) {
        heartContainer.innerText = FULL_HEART
        heartContainer.classList.add('activated-heart')
      } else if (response === "Pretend remote server notified of action!" && heartContainer.innerText === FULL_HEART) {
        heartContainer.innerText = EMPTY_HEART
        heartContainer.classList.remove('activated-heart')
      }
    })
    .catch(error => {
      const errModal = document.getElementById('modal')
      const errModalMessage = document.getElementById('modal-message')
      errModalMessage.innerText = error
      errModal.classList.remove('hidden')
      setTimeout(() => {
        errModal.classList.add('hidden')}, 3000)
    })
  }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
