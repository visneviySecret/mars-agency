import Button from '@/components/UI/Button/Button'
import { CrossIcon, CrossSize } from '@/components/UI/Cross/Cross'
import { useMediaQuery } from '@/hooks/useMedia'
import Portal from '@/share/Portal/Portal'
import { breakPoints } from '@/utils/breakPoints'
import { Theme } from '@/utils/helpers/getThemeColors'
import { useTheme } from 'next-themes'
import React from 'react'
import {
  ButtonsWrapper,
  ButtonWrapper,
  Container,
  Content,
  Title,
  TitleWrapper,
  Wrapper,
} from './WarningForm.style'

interface WarningProps {
  title: string
  content: string
  closingText: string
  setIsActive: (val: boolean) => void
  isActive: boolean
  onClose?: () => void
}

function WarningForm({
  title,
  content,
  closingText,
  isActive,
  setIsActive,
  onClose,
}: WarningProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark
  const isSmallScreen = useMediaQuery(`(max-width: ${breakPoints.Tablet})`)

  const handleclose = () => {
    setIsActive(false)
    if (onClose) onClose()
  }

  const handleBack = () => {
    setIsActive(false)
  }

  return (
    <Portal isActive={isActive} isDisableTransition={true}>
      <Container isActive={isActive}>
        <Wrapper isDarkMode={isDarkMode}>
          <TitleWrapper isDarkMode={isDarkMode}>
            <Title>{title}</Title>
            <CrossIcon size={CrossSize.medium} onClick={handleBack} />
          </TitleWrapper>
          <Content>{content}</Content>
          <ButtonsWrapper>
            {onClose && (
              <ButtonWrapper isDarkMode={isDarkMode}>
                <Button
                  onClick={handleclose}
                  style={{
                    width: !isSmallScreen ? '145px' : '100%',
                  }}
                >
                  закрыть
                </Button>
              </ButtonWrapper>
            )}
            <Button
              onClick={handleBack}
              style={{ width: !isSmallScreen && onClose ? '161px' : '100%' }}
            >
              {closingText}
            </Button>
          </ButtonsWrapper>
        </Wrapper>
      </Container>
    </Portal>
  )
}

export default WarningForm
