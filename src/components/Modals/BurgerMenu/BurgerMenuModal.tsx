import Button from '@/components/UI/Button/Button'
import Toggler from '@/components/UI/Toggler/Toggler'
import Navigation from '@/share/Navigation/Navigation'
import { Social } from '@/share/Social/Social'
import { Color } from '@/utils/color'
import Link from 'next/link'
import React from 'react'
import {
  ButtonWrapper,
  FlexWrapper,
  NavWrapper,
  SocialWrapper,
  Wrapper,
} from './BurgerMenuModal.style'

interface IProps {
  onClose: () => void
  isActive: boolean
  theme?: string
}

const customButton = {
  fontSize: 'max(10px, 1.9vw)',
}

function BurgerMenuModal({ onClose, isActive, theme }: IProps) {
  const bgColor = theme === 'light' ? Color.WHITE : Color.GREY
  const iconColor = theme === 'light' ? Color.GREY : Color.WHITE
  const handleClick = () => {
    onClose()
  }

  return (
    <Wrapper isActive={isActive} color={bgColor}>
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
          <Social color={iconColor} />
          <Toggler />
        </SocialWrapper>
      </FlexWrapper>
    </Wrapper>
  )
}

export default BurgerMenuModal
