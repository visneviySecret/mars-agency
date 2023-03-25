import React, { useEffect, useState } from 'react'
import {
  Section,
  LogoWrapper,
  Wrapper,
  ButtonWrapper,
  MenuWrapper,
  NavigationWrapper,
} from './Header.style'
import { Logo } from '@/assets/Logo'
import { useTheme } from 'next-themes'
import { Container } from '@/components/UI/Container/container.style'
import Button from '@/components/UI/Button/Button'
import Navigation from '@/share/Navigation/Navigation'
import Link from 'next/link'
import BurgerMenuModal from '@/components/Modals/BurgerMenu/BurgerMenuModal'
import { BurgerMenu } from '@/components/UI/BurgerMenu/BurgerMenu'
import { useMediaQuery } from '@/hooks/useMedia'
import { breakPoints } from '@/utils/breakPoints'
import { blockScroll, unlockScroll } from '../hero/utils'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Tablet})`)
  const [isOpenMenu, setIsOpeMenu] = useState(false)
  const isDarkMode = theme === 'dark'

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleMenu = () => {
    setIsOpeMenu((prev) => !prev)
    if (isOpenMenu) blockScroll()
    unlockScroll()
  }

  const handleClose = () => {
    setIsOpeMenu(false)
    unlockScroll()
  }

  const handleEmptyClick = () => {
    return
  }

  useEffect(() => {
    if (!isSmallScreen) handleClose()
  }, [isSmallScreen])

  return (
    <Section>
      <Container>
        <Wrapper>
          <LogoWrapper isDarkMode={isDarkMode} onClick={handleTheme}>
            <Logo />
          </LogoWrapper>

          <MenuWrapper>
            <NavigationWrapper>
              <Navigation />
            </NavigationWrapper>

            <Link href={'#form'}>
              <ButtonWrapper>
                <Button onClick={handleEmptyClick}>Обратный звонок</Button>
              </ButtonWrapper>
            </Link>
          </MenuWrapper>
          <BurgerMenu
            onClick={handleMenu}
            theme={theme}
            isActive={isOpenMenu}
          />
          {isOpenMenu && <BurgerMenuModal onClose={handleClose} />}
        </Wrapper>
      </Container>
    </Section>
  )
}
