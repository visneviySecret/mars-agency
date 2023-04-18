import { Checkbox } from '@/components/UI/Checkbox/Checkbox'
import React from 'react'
import { Wrapper, Label, Text, Underlined } from './PersonalAgreement.style'
import Link from 'next/link'
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
        Даю согласие на обработку{' '}
        <Underlined>
          <Link
            href={`/5_pdfmenus_71_5f8d52f60f665.pdf`}
            passHref
            target="_blank"
          >
            Персональных данных
          </Link>
        </Underlined>
      </Text>
    </Wrapper>
  )
}

export default PersonalAgreement
