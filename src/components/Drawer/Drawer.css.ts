import { createVar, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../styles/vars.css';

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
});

const transformValue = createVar();

const slideIn = keyframes({
  from: { transform: transformValue },
  to: { transform: 'translate3d(0,0,0)' },
});

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: transformValue },
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },

    '&[data-state="closed"]': {
      animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
  },
});

export const styledContent = recipe({
  base: {
    backgroundColor: vars.color.gray1,
    boxShadow:
      '$colors$shadowLight 0 0 38px -10px, $colors$shadowDark 0 0 35px -15px',
    position: 'fixed',
    top: 0,
    bottom: 0,
    width: 250,

    // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
    // Affects animated and non-animated dialogs alike.
    willChange: 'transform',

    // '&:focus': {
    //   outline: 'none',
    // },
    selectors: {
      '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },

      '&[data-state="closed"]': {
        animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
      },
    },
  },
  variants: {
    side: {
      top: {
        vars: {
          [transformValue]: 'translate3d(0,-100%,0)',
        },
        width: '100%',
        height: 300,
        bottom: 'auto',
      },
      right: {
        vars: {
          [transformValue]: 'translate3d(100%,0,0)',
        },
        right: 0,
      },
      bottom: {
        vars: {
          [transformValue]: 'translate3d(0,100%,0)',
        },
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto',
      },
      left: {
        vars: {
          [transformValue]: 'translate3d(-100%,0,0)',
        },
        left: 0,
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
});
