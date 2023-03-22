export const blockScroll = () => {
  const body = document.querySelector('body')
  if (!body) return
  body.style.position = 'fixed'
  document.body.style.top = `-${window.scrollY}px`
}

export const unlockScroll = () => {
  const body = document.querySelector('body')
  if (!body) return
  body.style.position = ''
  document.body.style.top = ``
}
