import { CrossSize } from './Cross'

export const getSize = (size: CrossSize) => {
  switch (size) {
    case CrossSize.small: {
      return '8px'
    }
    case CrossSize.medium: {
      return 'clamp(12px, 2vw, 16px)'
    }
    case CrossSize.big: {
      return 'clamp(12px, 2.5vw, 28px)'
    }
  }
}
export const getWidth = (size: CrossSize) => {
  switch (size) {
    case CrossSize.small: {
      return '1.13px'
    }
    case CrossSize.medium: {
      return 'clamp(1.5px, 0.4vw, 2px)'
    }
    case CrossSize.big: {
      return 'clamp(1.5px, 0.5vw, 3.96px)'
    }
  }
}
export const getHeight = (size: CrossSize) => {
  switch (size) {
    case CrossSize.small: {
      return '10.8px'
    }
    case CrossSize.medium: {
      return 'clamp(15.5px, 2.5vw, 21px)'
    }
    case CrossSize.big: {
      return 'clamp(15.5px, 3.5vw,35.64px)'
    }
  }
}
