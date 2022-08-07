const getStyleValue = (style) => style.split('-')[1]

const getCustomStyleFn = (options) => (styles, block) => {
  let output: any = {}
  const { fontFamilies, unitExportFn, customStyleFn } = options

  output = customStyleFn ? customStyleFn(styles, block, output) : {}

  styles.forEach((style) => {
    if (style.indexOf('COLOR-') === 0) {
      output.color = `#${getStyleValue(style)}`
    } else if (style.indexOf('BGCOLOR-') === 0) {
      output.backgroundColor = `#${getStyleValue(style)}`
    } else if (style.indexOf('FONTSIZE-') === 0) {
      output.fontSize = unitExportFn(
        getStyleValue(style),
        'font-size',
        'editor'
      )
    } else if (style.indexOf('LINEHEIGHT-') === 0) {
      output.lineHeight = unitExportFn(
        getStyleValue(style),
        'line-height',
        'editor'
      )
    } else if (style.indexOf('LETTERSPACING-') === 0) {
      output.letterSpacing = unitExportFn(
        getStyleValue(style),
        'letter-spacing',
        'editor'
      )
    } else if (style.indexOf('TEXTINDENT-') === 0) {
      output.textIndent = unitExportFn(
        getStyleValue(style),
        'text-indent',
        'editor'
      )
    } else if (style.indexOf('FONTFAMILY-') === 0) {
      output.fontFamily =
        (
          fontFamilies.find(
            (item) => item.name.toUpperCase() === getStyleValue(style)
          ) || {}
        ).family || ''
    }
  })

  return output
}

export default getCustomStyleFn
