import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const container = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  maxWidth: '768px',
  height: '100%',
  border: '1px solid black',
});

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  width: '100%',
  height: '100%',
});

export const topNav = style({});

export const bottomNav = style({
  display: 'flex',
  width: '100%',
  height: '107px',
  padding: `0 ${vars.space.s24}`,
  position: 'sticky',
  alignItems: 'center',
});
