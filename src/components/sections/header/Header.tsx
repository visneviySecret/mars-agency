import React, { useEffect, useState } from 'react'
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
import Toggler from '@/components/UI/Toggler/Toggler'
import useMeasure from 'react-use-measure'
import { Color } from '@/utils/color'

export default function Header() {
  const [ref, { width, height }] = useMeasure()
  const { theme } = useTheme()
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Tablet})`)
  const [isOpenMenu, setIsOpeMenu] = useState(false)
  const color = theme === 'dark' ? Color.WHITE : Color.GREY

  const handleMenu = () => {
    setIsOpeMenu((prev) => !prev)
    blockScroll()
    if (isOpenMenu) {
      return unlockScroll()
    }
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
              <Link href={'#form'}>
                <Button onClick={handleEmptyClick}>Обратный звонок</Button>
              </Link>
            </TogglerAndButtonWrapper>
          </MenuWrapper>
          <BurgerMenu
            onClick={handleMenu}
            theme={theme}
            isActive={isOpenMenu}
          />
          <BurgerMenuModal
            onClose={handleClose}
            isActive={isOpenMenu}
            theme={theme}
          />
        </Wrapper>
      </Container>
    </Section>
  )
}
