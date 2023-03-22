import React from 'react'
import { Checkbox } from '@/components/UI/Checkbox/CheckBox'
import { Wrapper, Label, Text, Underlined } from './PersonalAgreement.style'

function PersonalAgreement({
  isChecked,
  setIsChecked,
}: {
  isChecked: boolean
  setIsChecked: (val: boolean) => void
}) {
  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Wrapper>
      <Label>
        <Checkbox checked={isChecked} onChange={handleChange} />
      </Label>
      <Text>
        Даю согласие на обработку <Underlined>Персональных данных</Underlined>
      </Text>
    </Wrapper>
  )
}

export default PersonalAgreement
