import { createGlobalTheme } from '@vanilla-extract/css';

// THEME이 여러 개 늘어날 경우 createThemeContract를 사용하면 됩니다. //
// https://vanilla-extract.style/documentation/theming/#code-splitting-themes

export const vars = createGlobalTheme(':root', {
  space: {
    none: '0',
    xxs: '2px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '15px',
    xxl: '20px',
    xxxl: '25px',
    s4: '4px',
    s8: '8px',
    s14: '14px',
    s16: '16px',
    s20: '20px',
    s24: '24px',
  },
  borderRadius: {
    full: '99999px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '20px',
  },
  fontFamily: {
    body: 'SUIT-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    untitled: 'Untitled Sans, apple-system, sans-serif',
    mono: 'Söhne Mono, menlo, monospace',
  },
  fontSize: {
    h1: '34px',
    h2: '28px',
    h4: '17px',
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
    TABLE_HEADER: '10',
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
    secondary_text: '#666666', //Gray 6
    tertiary_text: '#9ea4aa', //Gray 4
    white: '#ffffff',
    red_text: '#FF513C', //Red
    blue_text: '#4DAAFF', //Blue

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

    disabled: '#E8EBED',
    disabled_text: '#9EA4AA',
    disabled_btn: '#E8EBED',

    // border
    border: '#E8EBED',
    border_focus: '#429AEB',
    border_error: '#FF3D00',
    border_success: '#00BFA5',
    border_warning: '#FFB300',
    border_info: '#429AEB',

    // background
    bg: '#ffffff',

    // shadow
    shadow: '0 2px 8px rgb(0 0 0 / 15%)',

    // BADGE
    badge_bg_first: '#FFE6FA',
    badge_bg_second: '#FFE435',
    badge_bg_third: '#9FE499',
    badge_bg_fourth: '#F7F7F7',
    badge_first: '#FF09C9',
    badge_second: '#FFFCEB',
    badge_third: '#9FE499',
    badge_fourth: '#ABB2AB',
  },
});
