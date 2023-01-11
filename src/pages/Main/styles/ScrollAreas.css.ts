import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  height: '200px',
  backgroundColor: 'white',
  padding: '15px',
});

export const text = style({
  color: 'violet',
  fontSize: '15px',
  lineHeight: '18px',
  fontWeight: '500',
});

export const tag = style({
  fontSize: '13px',
  lineHeight: '18px',
  marginTop: '10px',
  borderTop: '1px solid black',
  paddingTop: '10px',
});
