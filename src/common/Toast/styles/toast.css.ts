import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

import { toastRoot } from './toastRoot.css';
import { toastHeight, toastWidth, viewportPadding } from './vars.css';

export const toastPosition = createVar();

const toastViewport = recipe({
  base: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: `${viewportPadding}`,
    gap: '10px',
    width: `${toastWidth}`,
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',

    zIndex: 2147483647,
    outline: 'none',
    vars: {
      [viewportPadding]: '15px',
      [toastWidth]: '390px',
      [toastHeight]: 'auto',
    },
  },
  variants: {
    direction: {
      down: {
        bottom: 0,
        right: `calc(50% - ${toastPosition})`,
        top: 'unset',
        transform: 'translateX(50%)',
      },
      up: {
        top: 0,
        right: `calc(50% - ${toastPosition})`,
        bottom: 'unset',
        transform: 'translateX(50%)',
      },
      right: {
        bottom: 0,
        right: 0,
      },
      left: {
        bottom: 0,
        left: 0,
      },
    },
  },
});

const toastTitle = style({
  gridArea: 'title',
  fontSize: vars.fontSize.body2,
});

const toastDescription = style({
  gridArea: 'description',
});

export const ToastAction = style({
  gridArea: 'action',
});

export { toastDescription, toastRoot, toastTitle, toastViewport };
