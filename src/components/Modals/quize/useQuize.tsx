import { useState } from 'react'
import { Theme } from '@/utils/helpers/getThemeColors'
import { useTheme } from 'next-themes'
import { DealStatus } from './quize.utils'
import * as _ from 'lodash'
import { sendMessageToTelegram } from '@/pages/api/sendMessageToTelegram'

interface IField {
  [key: string]: string[] | { [key: string]: string }
}

interface QuizeProps {
  onClose: () => void
  dealStatus: DealStatus
}

function useQuize({ onClose, dealStatus }: QuizeProps) {
  const [form, setForm] = useState<IField>({})
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    phone: '',
  })
  const [isActiveWarning, setIsActiveWarning] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === Theme.dark
  const title =
    dealStatus === DealStatus.buy ? 'Купить объект' : 'Продать объект'

  const handleClose = () => {
    if (!_.isEmpty(form)) return setIsActiveWarning(true)
    resetForm()
  }

  const resetForm = () => {
    setForm({})
    onClose()
  }

  const submitForm = () => {
    const errorText = 'Это поле не может быть пустым'
    if (_.isEmpty(form)) {
      return setErrorMessage({
        name: errorText,
        phone: errorText,
      })
    }
    const isError = Object.values(form['5. Контактные данные']).map(
      (item, index) => {
        if (item === '') {
          const key = index === 1 ? 'name' : 'phone'
          setErrorMessage((prev) => ({
            ...prev,
            [key]: errorText || '',
          }))
          return true
        }
      },
    )
    if (isError.indexOf(true) !== -1) return
    sendMessageToTelegram(JSON.stringify(form))
  }

  const handleForm = (
    key: string,
    value: string[] | { [key: string]: string },
  ) => {
    console.log(key, value)
    setErrorMessage({ name: '', phone: '' })
    if (_.isEmpty(value)) {
      const result = _.flow([
        Object.entries,
        (arr) =>
          arr.filter((title: string) => {
            return key !== title[0]
          }),
        Object.fromEntries,
      ])(form)
      setForm(result)
      return
    }
    const result = { ...form, [key]: value }
    setForm(result)
  }

  return {
    title,
    form,
    setForm,
    isDarkMode,
    errorMessage,
    setErrorMessage,
    isActiveWarning,
    setIsActiveWarning,
    handleClose,
    handleForm,
    submitForm,
    resetForm,
  }
}

export default useQuize
