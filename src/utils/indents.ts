const pxToRem = (value: number) => {
  const result = value / 16
  return `${result}rem`
}

export const indents = {
  indent5: pxToRem(5),
  indent6: pxToRem(6),
  indent8: pxToRem(8),
  indent10: pxToRem(10),
  indent12: pxToRem(12),
  indent15: pxToRem(15),
  indent18: pxToRem(18),
  indent20: pxToRem(20),
  indent23: pxToRem(23),
  indent25: pxToRem(25),
  indent30: pxToRem(30),
  indent35: pxToRem(35),
  indent36: pxToRem(36),
  indent40: pxToRem(40),
  indent44: pxToRem(44),
  indent45: pxToRem(45),
  indent46: pxToRem(46),
  indent50: pxToRem(50),
  indent60: pxToRem(60),
  indent70: pxToRem(70),
  indent75: pxToRem(75),
  indent80: pxToRem(80),
  indent120: pxToRem(120),
  indent140: pxToRem(140),
  indent150: pxToRem(150),
  indent160: pxToRem(160),
}
