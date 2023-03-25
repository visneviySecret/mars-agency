import Link from 'next/link'
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
  z-index: 200;
  list-style-type: none;
  display: flex;
  flex-direction: column;
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
          <Link href={item.ancor}>{item.title}</Link>
        </Item>
      ))}
    </List>
  )
}

export default Navigation
