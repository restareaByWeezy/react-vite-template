import { createGlobalTheme } from '@vanilla-extract/css';

// THEME이 여러 개 늘어날 경우 createThemeContract를 사용하면 됩니다. //
// https://vanilla-extract.style/documentation/theming/#code-splitting-themes

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0',
    xxs: '2px',
    xs: '4px',
    s: '6px',
    m: '8px',
    l: '10px',
    xl: '15px',
    xxl: '20px',
    xxxl: '25px',
  },
  borderRadius: {
    full: '99999px',
    s: '4px',
    m: '6px',
    l: '8px',
    xl: '10px',
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    untitled: 'Untitled Sans, apple-system, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
  },
  fontSize: {
    h1: '32px',
    h2: '26px',
    h4: '18px',
    body1: '14px',
    body2: '12px',
    body3: '11px',
    caption: '10px',
  },
  fontWeight: {
    bold: '700',
    semiBold: '600',
  },
  lineHeight: {},
  zIndices: {
    GNB: '1000',
    DROPDOWN: '1001',
    CHECK_ICON: '11',
    CHECK_BOX: '10',
  },
  color: {
    primary: '#429AEB',

    // GrayScale
    gray9: '#0a0a0a',
    gray8: '#1b1d1f',
    gray7: '#26282b',
    gray6: '#464c53',
    gray5: '#73787f',
    gray4: '#9ea4aa',
    gray3: '#c9cdd2',
    gray2: '#e8ebed',
    gray1: '#f7f8f9',

    // BlueScale
    blue9: '#0C2C70',
    blue8: '#153F88',
    blue7: '#2159A9',
    blue6: '#3078CA',
    blue5: '#429AEB',
    blue4: '#6FBAF3',
    blue3: '#8DD0F9',
    blue2: '#B4E5FD',
    blue1: '#D9F4FE',

    // Gray Trans
    g_trans4: 'rgba(176, 179, 188, 0.7)',
    g_trans3: 'rgba(176, 179, 188, 0.5)',
    g_trnas2: 'rgba(176, 179, 188, 0.3)',
    g_trans1: 'rgba(176, 179, 188, 0.1)',

    // TextColor
    primary_text: '#1b1d1f', //Gray 8
    secondary_text: '#464c53', //Gray 6
    tertiary_text: '#9ea4aa', //Gray 4
    white: '#ffffff',

    // btn
    primary_btn: '#429AEB',
    primary_pressed: '#3078CA',
    secondary_btn: '#464C53',
    secondary_pressed: '#26282B',
    tertiary_btn: '#E8EBED',
    tertiary_pressed: '#C9CDD2',

    //status
    success: '#00BFA5',
    warning: '#FFB300',
    error: '#FF3D00',
    info: '#429AEB',
  },
});
