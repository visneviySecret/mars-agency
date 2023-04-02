import React, { ReactNode } from 'react'
import { FieldsWrapper, Title, Wrapper } from './Step.style'
import { useTheme } from 'next-themes'
import { Theme } from '@/components/UI/Button/Button.utils'

interface IProps {
  title: string
  children: ReactNode
}

function StepPattern({ children, title }: IProps) {
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark

  return (
    <Wrapper isDarkMode={isDarkMode}>
      <Title>{title}</Title>
      <FieldsWrapper>{children}</FieldsWrapper>
    </Wrapper>
  )
}

export { StepPattern }
