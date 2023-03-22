import { Color } from '@/utils/color'

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export const getThemeColor = (theme: Theme, isActive?: boolean) => {
  switch (theme) {
    case Theme.dark:
      return isActive ? darkThemeActive : darkTheme
    case Theme.light:
      return isActive ? lightThemeActive : lightTheme
  }
}

const lightTheme = {
  color: Color.GREY,
  borderColor: Color.GREY,
  backgroundColor: 'transparent',
}

const darkTheme = {
  color: Color.WHITE,
  borderColor: Color.WHITE,
  backgroundColor: 'transparent',
}

const lightThemeActive = {
  border: 'none',
  color: Color.WHITE,
  backgroundColor: Color.GREY,
}

const darkThemeActive = {
  border: 'none',
  color: Color.GREY,
  backgroundColor: Color.WHITE,
}
