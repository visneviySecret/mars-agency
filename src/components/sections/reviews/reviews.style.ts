import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: 12.2rem;
`

export const Title = styled.h2`
  flex: 1;
  font-size: clamp(1.5rem, 8vw, 2.8rem);
  font-weight: 600;
  line-height: 110%;
  margin-bottom: 4rem;
`

export const List = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  padding: 2rem;
  align-items: center;
  border-top: 1px solid;

  &:last-child {
    border-bottom: solid 1px;
  }
`

export const ItemWrapper = styled.div`
  position: relative;
  flex: 1;
`

export const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ItemTitle = styled.span`
  font-weight: 600;
`

export const ItemDescription = styled.span`
  font-weight: 400;
  max-width: 355px;
  opacity: 0.7;
`

export const ItemPhotoWrapper = styled.div``

export const ItemComment = styled.p`
  flex: 1;
  font-weight: 400;
  line-height: 130%;
`

export const ButtonWrapper = styled.div`
  width: 215px;
  margin: 2.2rem auto 0 auto;
`
