import Button from '@/components/UI/Button/Button'
import { CrossIcon, CrossSize } from '@/components/UI/Cross/Cross'
import Portal from '@/share/Portal/Portal'
import { Theme } from '@/utils/helpers/getThemeColors'
import { useTheme } from 'next-themes'
import React from 'react'
import {
  ButtonsWrapper,
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
}

function WarningForm({
  title,
  content,
  closingText,
  isActive,
  setIsActive,
}: WarningProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark

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
            <Button onClick={handleBack} style={{ width: '100%' }}>
              {closingText}
            </Button>
          </ButtonsWrapper>
        </Wrapper>
      </Container>
    </Portal>
  )
}

export default WarningForm
