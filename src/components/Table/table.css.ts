import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

export const table = style({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  overflow: 'auto',
  border: `1px solid ${vars.color.border}`,
});

export const tableHead = style({
  border: `1px solid ${vars.color.border}`,
});

export const tr = style({});

export const td = style({
  selectors: {
    [`${tr} &:first-child`]: {
      position: 'sticky',
      left: 0,
      zIndex: vars.zIndices.TABLE_HEADER,
      backgroundColor: vars.color.white,
    },
    [`${tr} &:second-child`]: {
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
  padding: '0 30px',
});
