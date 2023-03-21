import { Color } from '@/utils/color'

export enum Theme {
  light = 'light',
  dark = 'dark',
  coral = 'coral',
}

export const getThemeColor = (theme: Theme) => {
  switch (theme) {
    case Theme.dark:
      return darkTheme
    case Theme.light:
      return lightTheme
    case Theme.coral:
      return coralTheme
  }
}

const lightTheme = {
  color: Color.WHITE,
  backgroundColor: Color.GREY,
  borderColor: Color.GREY,
}

const coralTheme = {
  color: Color.WHITE,
  backgroundColor: Color.CORAL,
  borderColor: Color.BLACK,
}

export const lightThemeHover = {
  color: Color.WHITE,
  backgroundColor: Color.BLACK,
}
const darkTheme = {
  color: Color.WHITE,
  backgroundColor: Color.BLACK,
  borderColor: Color.WHITE,
}

export const darkThemeHover = {
  color: Color.BLACK,
  backgroundColor: Color.WHITE,
}
