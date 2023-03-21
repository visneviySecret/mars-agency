import styled from 'styled-components'

export const Section = styled.section`
  margin-bottom: calc(12.2rem - 3.3rem);
`

export const Title = styled.h2`
  flex: 1;
  font-size: clamp(1.5rem, 8vw, 2.8rem);
  font-weight: 600;
  line-height: 110%;
  margin-bottom: 3.3rem;
`

export const Wrapper = styled.div`
  position: relative;
  border-top: 1px solid;
  border-bottom: 1px solid;
  padding: 3.3rem 0;
`
export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.2rem;
`

export const StepTitle = styled.span`
  font-weight: 400;
  font-size: 1.9rem;
  line-height: 41px;
`

export const List = styled.ul`
  display: flex;
  gap: 1.1rem;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  height: 5.55rem;
  border-top: solid 1px;
  &:last-child {
    border-bottom: solid 1px;
  }
`

export const ItemTitle = styled.span`
  flex: 1;
  font-weight: 400;
  line-height: 130%;
  font-size: 1rem;
`
