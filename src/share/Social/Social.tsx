import { indents } from '@/utils/indents'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Instagram } from '@/assets/Icons/instagram'
import { Telegram } from '@/assets/Icons/telegram'
import { Whatsup } from '@/assets/Icons/whatsup'
import useMeasure from 'react-use-measure'

export const Icons = styled.ul`
  display: flex;
  gap: ${indents.indent20};
  list-style-type: none;
  align-items: flex-end;
  max-height: 30px;

  & > * {
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`

export const IconWrapper = styled.div`
  width: clamp(${indents.indent15}, 3.2vw, ${indents.indent25});
`

function Social({ color }: { color?: string }) {
  const [ref, { width }] = useMeasure()

  return (
    <Icons>
      <Link href={''}>
        <IconWrapper ref={ref}>
          <Telegram width={width} color={color} />
        </IconWrapper>
      </Link>
      <Link href={''}>
        <IconWrapper>
          <Instagram width={width} color={color} />
        </IconWrapper>
      </Link>
      <Link href={''}>
        <IconWrapper>
          <Whatsup width={width} color={color} />
        </IconWrapper>
      </Link>
    </Icons>
  )
}

export { Social }
