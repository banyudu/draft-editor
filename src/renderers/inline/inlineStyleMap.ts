const getCustomStyleMap = (customStyleMap = {}) => {
  return {
    SUPERSCRIPT: {
      position: 'relative',
      top: '-8px',
      fontSize: '11px'
    },
    SUBSCRIPT: {
      position: 'relative',
      bottom: '-8px',
      fontSize: '11px'
    },
    ...customStyleMap
  }
}

export default getCustomStyleMap
