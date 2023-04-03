import { handleLink } from '@/utils/helpers/smoothScroll'
import React from 'react'
import styled from 'styled-components'

const navList = [
  { title: 'О нас', ancor: '#about-us' },
  { title: 'Услуги', ancor: '#offers' },
  { title: 'Отзывы', ancor: '#reviews' },
  { title: 'Партнёры', ancor: '#partners' },
  { title: 'Контакты', ancor: '#footer' },
]

export const List = styled.nav`
  z-index: 1000;
  position: relative;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-size: clamp(10px, 1.9vw, 16px);
`

export const Item = styled.a<{
  isBurger?: boolean
}>`
  font-size: ${({ isBurger }) => isBurger && '35px'};
  line-height: ${({ isBurger }) => isBurger && '140%'};
  margin-bottom: ${({ isBurger }) => isBurger && '15px'};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  text-decoration: none;
`

function Navigation({
  onClose,
  isBurger,
}: {
  onClose?: () => void
  isBurger?: boolean
}) {
  return (
    <List>
      {navList.map((item, index) => (
        <Item
          key={index}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            onClose && onClose()
            handleLink(event, item.ancor)
          }}
          isBurger={isBurger}
        >
          {item.title}
        </Item>
      ))}
    </List>
  )
}

export default Navigation
