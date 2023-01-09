import { style } from '@vanilla-extract/css';

const selectTrigger = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 15px',
  fontSize: '13px',
  lineHeight: '1',
  height: '35px',
  gap: '5px',
  backgroundColor: 'white',
  color: 'var(--violet11)',
  boxShadow: '0 2px 10px var(--blackA7)',
  selectors: {
    '&:hover': {
      backgroundColor: 'var(--mauve3)',
    },
    '&:focus': {
      boxShadow: '0 0 0 2px black',
    },
    '&[data-placeholder]': {
      color: 'var(--violet9)',
    },
  },
});

const selectContent = style({
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '6px',
});

const selectViewport = style({
  padding: '5px',
});

const selectItem = style({
  fontSize: '13px',
  lineHeight: '1',
  color: 'var(--violet11)',
  borderRadius: '3px',
  display: 'flex',
  alignItems: 'center',
  height: '25px',
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',
  selectors: {
    '&[data-disabled]': {
      color: 'var(--mauve8)',
      pointerEvents: 'none',
    },
    '&[data-highlighted]': {
      outline: 'none',
      backgroundColor: 'var(--violet9)',
      color: 'var(--violet1)',
    },
  },
});

const selectLabel = style({
  padding: '0 25px',
  fontSize: '12px',
  lineHeight: '25px',
  color: 'var(--mauve11)',
});

const selectSeparator = style({
  height: '1px',
  backgroundColor: 'var(--violet6)',
  margin: '5px',
});

const selectItemIndicator = style({
  position: 'absolute',
  left: 0,
  width: '25px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const selectScrollButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '25px',
  backgroundColor: 'white',
  color: 'var(--violet11)',
  cursor: 'default',
});

export {
  selectTrigger,
  selectContent,
  selectViewport,
  selectItem,
  selectLabel,
  selectSeparator,
  selectItemIndicator,
  selectScrollButton,
};
