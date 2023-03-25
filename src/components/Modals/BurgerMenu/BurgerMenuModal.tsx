import Button from '@/components/UI/Button/Button'
import Navigation from '@/share/Navigation/Navigation'
import { Social } from '@/share/Social/Social'
import Link from 'next/link'
import React from 'react'
import {
  ButtonWrapper,
  NavWrapper,
  SocialWrapper,
  Wrapper,
} from './BurgerMenu.style'

const customButton = {
  fontSize: 'max(10px, 1.9vw)',
}

function BurgerMenuModal({ onClose }: { onClose: () => void }) {
  const handleClick = () => {
    onClose()
  }
  return (
    <Wrapper>
      <NavWrapper>
        <Navigation onClose={onClose} />
      </NavWrapper>

      <ButtonWrapper>
        <Link href={'#form'}>
          <Button onClick={handleClick} style={customButton}>
            Оставить заявку
          </Button>
        </Link>
      </ButtonWrapper>

      <SocialWrapper>
        <Social />
      </SocialWrapper>
    </Wrapper>
  )
}

export default BurgerMenuModal
