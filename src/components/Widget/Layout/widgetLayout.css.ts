import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  width: '100%',
  height: '100%',
});

export const content = style({
  width: '100%',
  height: '100%',
  padding: '0 30px',
});

export const headerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '50px',
  padding: '0 10px',
});

export const textWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  height: '100%',

  transition: 'all 0.8s ease',
});
