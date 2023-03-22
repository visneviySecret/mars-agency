import { Color } from '@/utils/color'

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export const getThemeColor = (theme: Theme) => {
  switch (theme) {
    case Theme.dark:
      return darkTheme
    case Theme.light:
      return lightTheme
  }
}

const lightTheme = {
  color: Color.GREY,
  borderColor: Color.GREY,
  backgroundColor: Color.WHITE,
}

const darkTheme = {
  color: Color.WHITE,
  borderColor: Color.WHITE,
  backgroundColor: Color.GREY,
}
