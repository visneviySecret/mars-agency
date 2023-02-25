import styled from 'styled-components'

const lightTheme = {
  body: '#FFF',
  text: '#363537',
  color: 'red',
  toggleBorder: '#FFF',
  background: '#363537',
}

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}

export const ButtonComponent = styled.button<{ theme: string }>`
  ${(props) => (props.theme === 'dark' && darkTheme) || lightTheme}
`
