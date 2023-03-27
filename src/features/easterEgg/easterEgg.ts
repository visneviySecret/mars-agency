import photo from './photo.jpg'

export const callTheBats = () => {
  const body = document.querySelector('body')
  const html = document.querySelector('html')

  if (!body || !html) return

  const img = createImage()
  const audio = createAudio()

  audio.play()

  // body.classList.add('call-the-bats')
  setTimeout(() => {
    html.appendChild(img)
  }, 500)

  setTimeout(() => {
    // body.classList.remove('call-the-bats')
    html.removeChild(img)
  }, 2000)
}

function createImage() {
  const img = document.createElement('img')
  img.classList.add('photo-power')
  img.src = photo.src
  img.style.position = 'fixed'
  img.style.inset = '50% 50%'
  img.style.translate = '-50% -50%'

  return img
}

function createAudio() {
  const audio = document.createElement('audio')
  const source = document.createElement('source')

  audio.controls = true
  source.src = '/Sound Effect.mp3'
  source.type = 'audio/mpeg'
  audio.appendChild(source)

  return audio
}
