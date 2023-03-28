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

export const Item = styled.li<{ onClick?: () => void }>`
  font-size: ${({ onClick }) => onClick && '35px'};
  line-height: ${({ onClick }) => onClick && '140%'};

  margin-bottom: ${({ onClick }) => onClick && '15px'};

  &:last-child {
    margin-bottom: 0;
  }

  & > a {
    text-decoration: none;
  }
`

function Navigation({ onClose }: { onClose?: () => void }) {
  return (
    <List>
      {navList.map((item, index) => (
        <Item key={index} onClick={onClose}>
          <a
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleLink(e, item.ancor)
            }
          >
            {item.title}
          </a>
        </Item>
      ))}
    </List>
  )
}

export default Navigation
