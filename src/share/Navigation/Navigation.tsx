import React from 'react'
import styled from 'styled-components'

const navList = [
  { title: 'О нас', ancor: '#about-us' },
  { title: 'Услуги', ancor: '#offers' },
  { title: 'Отзывы', ancor: '#reviews' },
  { title: 'Партнёры', ancor: '#partners' },
  { title: 'Контакты', ancor: '#contacts' },
]

export const List = styled.ul`
  flex: 1;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  & > a {
    text-decoration: none;
  }
`

function Navigation() {
  return (
    <List>
      {navList.map((item, index) => (
        <Item key={index}>
          <a href={item.ancor}>{item.title}</a>
        </Item>
      ))}
    </List>
  )
}

export default Navigation
