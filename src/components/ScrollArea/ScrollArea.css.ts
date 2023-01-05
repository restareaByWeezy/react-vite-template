import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/vars.css';

export const root = style({
  width: '200px',
  height: '225px',
  borderRadius: '4px',
  overflow: 'hidden',
  boxShadow: '0 2px 10px gray',
  backgroundColor: 'white',
  scrollbarWidth: 'auto',
});

export const viewport = style({
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

export const scrollbar = style({
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: '2px',
  width: '5px',
  background: vars.color.gray3,
  borderRadius: '10px',
  transition: 'background 160ms ease-out',
  selectors: {
    '&:hover': {
      background: vars.color.gray4,
    },
    '&[data-orientation="vertical"]': {
      width: '5px',
    },
  },
});

export const thumb = style({
  flex: '1',
  position: 'relative',
  background: vars.color.primary,
  transition: 'background 160ms ease-out',
  selectors: {
    '&:hover': {
      background: vars.color.primary,
    },
    '&::before': {
      borderRadius: '10px',
      background: vars.color.primary,
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minHeight: '5px',
      minWidth: '5px',
    },
  },
});

export const corner = style({
  background: 'rgba(0, 0, 0, 0.6)',
});
