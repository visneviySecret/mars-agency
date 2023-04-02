import { FormValues } from '@/components/Modals/SailModal/SailModal.types'

export function convertToStringObject(obj: FormValues): {
  [key: string]: string
} {
  const result = {} as { [key: string]: string }

  Object.keys(obj).forEach((key: string) => {
    // @ts-ignore
    const value = obj[key]
    if (Array.isArray(value)) {
      result[key] = value.join(', ')
    } else {
      const subObj = value
      Object.keys(subObj).forEach((subkey) => {
        const newKey = `${subkey}`
        result[newKey] = subObj[subkey]
      })
    }
  })

  return result
}

export function cleanObject(obj: { [key: string]: string }) {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => value !== '',
  )

  return Object.fromEntries(filteredEntries)
}

export function objectToString(obj: { [key: string]: string }) {
  return Object.keys(obj)
    .map((key) => `${key}: ${obj[key]}\n`)
    .join(' ')
}
