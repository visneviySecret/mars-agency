import { Checkbox } from '@/components/UI/Checkbox/Checkbox'
import React from 'react'
import { Wrapper, Label, Text, Underlined } from './PersonalAgreement.style'

function PersonalAgreement({
  isChecked,
  setIsChecked,
  isLanding,
}: {
  isChecked: boolean
  setIsChecked: (val: boolean) => void
  isLanding?: boolean
}) {
  const handleChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <Wrapper>
      <Label>
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          isLanding={isLanding}
        />
      </Label>
      <Text isLanding={isLanding}>
        Даю согласие на обработку <Underlined>Персональных данных</Underlined>
      </Text>
    </Wrapper>
  )
}

export default PersonalAgreement
