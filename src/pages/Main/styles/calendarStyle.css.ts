import { createVar, globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

//TOOLBAR
globalStyle('.rbc-toolbar', {
  background: 'red',
  display: 'flex',
  minWidth: '768px',
  padding: vars.space.s24,
});

export const toolbar = style({
  width: '100%',
  minWidth: '768px',
  padding: `${vars.space.s24} ${vars.space.s24} ${vars.space.s20} ${vars.space.s24}`,
});

export const badgeWrapper = style({
  marginTop: vars.space.s24,
});

//HEADER

//DATE CELL
globalStyle('.rbc-day-bg', {
  borderLeft: 'none',
});
globalStyle('.rbc-date-cell', {
  display: 'flex',
  justifyContent: 'center',
});
globalStyle('.rbc-row-segment', {
  display: 'flex',
  justifyContent: 'center',
  padding: `0 !important`,
});

//DATE BADGE
globalStyle('.rbc-event', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: `${vars.color.blue3} !important`,
  margin: `0 ${vars.space.s4}`,
  width: '100%',
  height: '24px',
  fontSize: vars.fontSize.body2,
  borderRadius: vars.borderRadius.md,
  padding: '0 4px',
});
globalStyle('.rbc-event:before', {
  content: '',
  width: '24px',
  height: '24px',
  borderRadius: vars.borderRadius.full,
  background: 'red',
});
globalStyle('.rbc-event-content', {
  paddingLeft: vars.space.s4,
});

globalStyle('.rbc-row-segment', {
  padding: '0px 8px 0px 0px',
});

globalStyle('.rbc-month-row', {
  fontSize: vars.fontSize.h4,
});

//BORDERS
globalStyle('.rbc-header', {
  border: 'none !important',
});
globalStyle('.rbc-month-view', {
  border: 'none',
});
