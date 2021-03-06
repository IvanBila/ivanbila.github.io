import Typography from 'typography'
import '../../content/assets/fonts/fonts.css'
import '../../content/assets/css/style.css'

export const fonts = {
  thin: 'Inter Thin',
  light: 'Inter Light',
  regular: 'Inter Regular',
  semibold: 'Inter Semibold',
  bold: 'Inter Bold',
}

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.light, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.9)',
  bodyColor: 'hsla(0,0%,0%,0.8)',

  overrideStyles: ({rhythm}) => ({
    body: {
      fontVariantLigatures: 'none',
      backgroundColor: '#fafafa'
    },
    h1: {
      color: 'hsla(0,0%,0%,0.75)',
      fontFamily: fonts.light,
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit',
    },
    h2: {
      color: 'hsla(0,0%,0%,0.775)',
      fontFamily: fonts.semibold,
    },
    h3: {
      color: 'hsla(0,0%,0%,0.8)',
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
    },
    'h1,h2,h3,h4': {
      lineHeight: 1.25,
      marginTop: rhythm(1),
      marginBottom: rhythm(1 / 2),
    },
    strong: {
      fontFamily: fonts.bold,
      fontStyle: 'bold',
    },
    pre: {
      'min-width': '100%',
      'border-radius': '4px',
    },
    code: {
      overflow: 'initial',
      fontSize: '13pt',
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
