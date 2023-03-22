const pxToRem = (value: number) => {
  const result = value / 16
  return `${result}rem`
}

export const indents = {
  indent5: pxToRem(5),
  indent6: pxToRem(6),
  indent10: pxToRem(10),
  indent18: pxToRem(18),
  indent20: pxToRem(20),
  indent23: pxToRem(23),
  indent30: pxToRem(30),
  indent35: pxToRem(35),
  indent40: pxToRem(40),
  indent44: pxToRem(44),
  indent46: pxToRem(46),
  indent50: pxToRem(50),
  indent60: pxToRem(60),
  indent75: pxToRem(75),
  indent80: pxToRem(80),
  indent120: pxToRem(120),
  indent140: pxToRem(140),
  indent160: pxToRem(160),
}
