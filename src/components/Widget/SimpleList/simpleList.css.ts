import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: `1px solid ${vars.color.border}`,
  borderBottom: `1px solid ${vars.color.border}`,
  padding: '0 10px',
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
});

export const list = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
});
