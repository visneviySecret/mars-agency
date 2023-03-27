import Button from '@/components/UI/Button/Button'
import Toggler from '@/components/UI/Toggler/Toggler'
import Navigation from '@/share/Navigation/Navigation'
import { Social } from '@/share/Social/Social'
import Link from 'next/link'
import React from 'react'
import {
  ButtonWrapper,
  FlexWrapper,
  NavWrapper,
  SocialWrapper,
  Wrapper,
} from './BurgerMenuModal.style'

const customButton = {
  fontSize: 'max(10px, 1.9vw)',
}

function BurgerMenuModal({
  onClose,
  isActive,
}: {
  onClose: () => void
  isActive: boolean
}) {
  const handleClick = () => {
    onClose()
  }
  return (
    <Wrapper isActive={isActive}>
      <NavWrapper>
        <Navigation onClose={onClose} />
      </NavWrapper>

      <FlexWrapper>
        <ButtonWrapper />
        <ButtonWrapper>
          <Link href={'#form'}>
            <Button onClick={handleClick} style={customButton}>
              Оставить заявку
            </Button>
          </Link>
        </ButtonWrapper>

        <SocialWrapper>
          <Social />
          <Toggler />
        </SocialWrapper>
      </FlexWrapper>
    </Wrapper>
  )
}

export default BurgerMenuModal
