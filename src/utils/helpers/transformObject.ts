interface StringsObject {
  [key: string]: string
}

export function convertToStringObject(
  input: { [key: string]: string[] } & { [key: string]: any },
): StringsObject {
  const output: StringsObject = {}

  for (const key in input) {
    if (Array.isArray(input[key])) {
      output[key] = input[key].join('')
    } else {
      output[key] = input[key]
    }
  }

  return output
}

export function cleanObject(obj: { [key: string]: string }) {
  const filteredEntries = Object.entries(obj).filter(
    ([, value]) => value !== '',
  )

  return Object.fromEntries(filteredEntries)
}

export function objectToString(obj: { [key: string]: string }) {
  return Object.keys(obj)
    .map((key) => `${key}: ${obj[key]}\n`)
    .join(' ')
}
