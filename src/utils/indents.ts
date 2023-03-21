const pxToRem = (value: number) => {
  const result = value / 16
  return `${result}rem`
}

export const indents = {
  indent10: pxToRem(10),
  indent18: pxToRem(18),
  indent20: pxToRem(20),
  indent30: pxToRem(30),
  indent40: pxToRem(40),
  indent44: pxToRem(44),
  indent46: pxToRem(46),
  indent60: pxToRem(60),
  indent120: pxToRem(120),
}
