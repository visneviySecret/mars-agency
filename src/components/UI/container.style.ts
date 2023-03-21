import styled from 'styled-components'

export const Container = styled.div<{ isFlex?: boolean }>`
  display: ${({ isFlex }) => isFlex && 'flex'};
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 7.5%, 20px);
`
