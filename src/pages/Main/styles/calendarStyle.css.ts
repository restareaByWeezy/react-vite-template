import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

//TOOLBAR
globalStyle('.rbc-toolbar', {
  background: 'red',
  display: 'flex',
  minWidth: '420px',
  padding: vars.space.s24,
});

export const toolbar = style({
  width: '100%',
  minWidth: '420px',
  padding: `${vars.space.s24} ${vars.space.s24} ${vars.space.s20} ${vars.space.s24}`,
});

export const badgeWrapper = style({
  marginTop: vars.space.s24,
});

//HEADER

//EVENTS (BADGE)
globalStyle('.rbc-event', {});
