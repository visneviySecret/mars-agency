import { indents } from '@/utils/indents'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Instagram } from '@/assets/Icons/instagram'
import { Telegram } from '@/assets/Icons/telegram'
import { Whatsup } from '@/assets/Icons/whatsup'

export const Icons = styled.ul`
  display: flex;
  gap: ${indents.indent20};
  list-style-type: none;

  & > * {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`
export const social = [
  { title: 'Telegram', url: '', img: Telegram },
  { title: 'Instagram', url: '', img: Instagram },
  { title: 'WhatsApp', url: '', img: Whatsup },
]

function Social() {
  return (
    <Icons>
      {social.map((item) => (
        <li key={item.title}>
          <Link href={item.url}>{item.img()}</Link>
        </li>
      ))}
    </Icons>
  )
}

export { Social }
