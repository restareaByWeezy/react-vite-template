import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const navWrapper = style({
  width: '100%',
  padding: `${vars.space.s14} 0`,
});

export const menuBtnWrapper = style({
  width: '80px',
  height: '80px',
  borderRadius: vars.borderRadius.xl,
});
