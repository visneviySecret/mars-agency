import { useEffect } from 'react'

export const CursorChanger = () => {
  useEffect(() => {
    const cursorImage = new Image()
    cursorImage.src = '../assets/Arrows/Vector (3).svg'
    cursorImage.onload = () => {
      document.body.style.cursor =
        'url("../assets/Arrows/Vector (3).svg") 0 0, auto'
    }
  }, [])
}
