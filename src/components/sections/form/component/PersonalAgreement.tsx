import React from 'react'
import {
  Wrapper,
  Label,
  HiddenCheckbox,
  StyledCheckbox,
  Text,
  Underlined,
  Icon,
} from './PersonalAgreement.style'

const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => (
  <>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </>
)

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
