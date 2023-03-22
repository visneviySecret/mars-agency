import { Color } from '@/utils/color'

export enum Theme {
  light = 'light',
  dark = 'dark',
  coral = 'coral',
}

export const getThemeColor = (theme?: Theme | string) => {
  switch (theme) {
    case Theme.dark:
      return darkTheme
    case Theme.light:
      return lightTheme
    case Theme.coral:
      return coralTheme
  }
}

const getPadding = {
  paddingInline: '39px',
  paddingBlock: '13px 11px',
}

const lightTheme = {
  color: Color.WHITE,
  borderColor: Color.GREY,
  backgroundColor: Color.GREY,
}

const coralTheme = {
  color: Color.WHITE,
  borderColor: Color.GREY,
  backgroundColor: Color.CORAL,
}

const darkTheme = {
  color: Color.GREY,
  borderColor: Color.WHITE,
  backgroundColor: Color.WHITE,
}

export const lightThemeHover = {
  ...getPadding,
  color: Color.GREY,
  borderColor: Color.GREY,
}

export const darkThemeHover = {
  ...getPadding,
  color: Color.WHITE,
  borderColor: Color.WHITE,
}
