import { breakPoints } from '@/utils/breakPoints'
import styled from 'styled-components'

export const Container = styled.div<{ isFlex?: boolean; isDeactive?: boolean }>`
  display: ${({ isFlex }) => isFlex && 'flex'};
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 ${({ isDeactive }) => !isDeactive && 'clamp(1rem, 7.5%, 20px)'};

  @media (max-width: ${breakPoints.Tablet}) {
    padding: 0 ${({ isDeactive }) => !isDeactive && 'clamp(10px, 3.2vw, 20px)'};
  }
`
