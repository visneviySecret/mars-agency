import React from 'react'
import {
  Section,
  LogoWrapper,
  Wrapper,
  MenuWrapper,
  NavigationWrapper,
  TogglerAndButtonWrapper,
  LogoWidthWrapper,
} from './Header.style'
import { Logo } from '@/assets/Logo'
import { Container } from '@/components/UI/Container/container.style'
import Button from '@/components/UI/Button/Button'
import Navigation from '@/share/Navigation/Navigation'
import BurgerMenuModal from '@/components/Modals/BurgerMenu/BurgerMenuModal'
import { BurgerMenu } from '@/components/UI/BurgerMenu/BurgerMenu'

import Toggler from '@/components/UI/Toggler/Toggler'

import { handleLink } from '@/utils/helpers/smoothScroll'
import useHeader from './useHeader'

export default function Header() {
  const {
    ref,
    width,
    height,
    theme,
    color,
    isOpenMenu,
    handleMenu,
    handleClose,
    previousMenuState,
    delayedIsOpenMenu,
  } = useHeader()

  return (
    <Section>
      <Container>
        <Wrapper>
          <LogoWrapper>
            <LogoWidthWrapper ref={ref}>
              <Logo width={width} height={height} color={color} />
            </LogoWidthWrapper>
          </LogoWrapper>

          <MenuWrapper>
            <NavigationWrapper>
              <Navigation />
            </NavigationWrapper>

            <TogglerAndButtonWrapper>
              <Toggler />
              <a onClick={handleLink}>
                <Button>Обратный звонок</Button>
              </a>
            </TogglerAndButtonWrapper>
          </MenuWrapper>
          <BurgerMenu
            onClick={handleMenu}
            theme={theme}
            isActive={delayedIsOpenMenu}
          />
        </Wrapper>
      </Container>
      {(isOpenMenu || previousMenuState) && (
        <BurgerMenuModal
          onClose={handleClose}
          isActive={delayedIsOpenMenu}
          theme={theme}
        />
      )}
    </Section>
  )
}
