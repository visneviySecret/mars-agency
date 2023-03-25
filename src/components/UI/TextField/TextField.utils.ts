export const getFormattedValue = (value: string, name: string) => {
  if (name !== 'phone') return value
  value = value.replace(/\D/g, '').substring(0, 11)
  const size = value.length
  if (size > 0) {
    value = value
  }
  if (size > 1) {
    value = value.slice(0, 1) + ' (' + value.slice(1)
  }
  if (size > 4) {
    value = value.slice(0, 6) + ') ' + value.slice(6)
  }

  return value
}
