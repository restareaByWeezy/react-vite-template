import { vars } from '@/styles/vars.css';
import { style } from '@vanilla-extract/css';

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  overflow: 'auto',
  border: `1px solid ${vars.color.border}`,
});

export const tableHead = style({
  border: `1px solid ${vars.color.border}`,
});

export const tr = style({
  selectors: {
    '&:first-child': {
      position: 'sticky',
      left: 0,
      zIndex: vars.zIndices.TABLE_HEADER,
    },
    '&:second-child': {
      position: 'sticky',
      left: 40,
      zIndex: vars.zIndices.TABLE_HEADER,
    },
  },
});

export const th = style({
  minWidth: '40px',
  minHeight: '40px',
  padding: vars.space.xs,
  textAlign: 'left',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.gray2,

  selectors: {
    '&:first-child': {
      position: 'sticky',
      left: 0,
      zIndex: vars.zIndices.TABLE_HEADER,
    },
    '&:second-child': {
      position: 'sticky',
      left: 40,
      zIndex: vars.zIndices.TABLE_HEADER,
    },
  },
});

export const scrollAreaWrapper = style({
  display: 'flex',
  flex: '1',
  width: '100%',
  height: '100%',
  overflow: 'auto',
});
