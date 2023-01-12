import { createVar,style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

const triggerWidth = createVar();
const triggerHeight = createVar();

const selectTrigger = recipe({
  variants: {
    size: {
      small: {
        vars: {
          [triggerWidth]: '50px',
          [triggerHeight]: '25px',
        },
      },
      medium: {
        vars: {
          [triggerWidth]: '100px',
          [triggerHeight]: '35px',
        },
      },
      large: {
        vars: {
          [triggerWidth]: '150px',
          [triggerHeight]: '45px',
        },
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: triggerWidth,
    borderRadius: vars.borderRadius.sm,
    padding: '0 7px',
    fontSize: '13px',
    lineHeight: '1',
    height: triggerHeight,
    gap: '5px',
    backgroundColor: 'white',
    border: `1px solid ${vars.color.gray3}`,
    selectors: {
      '&:hover': {
        backgroundColor: vars.color.g_trans1,
      },
      '&[data-placeholder]': {
        color: vars.color.gray8,
      },
    },
    vars: {
      [triggerHeight]: '35px',
    },
  },
});

const selectValue = style({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const selectIcon = style({
  color: vars.color.gray8,
});

const selectContent = style({
  zIndex: vars.zIndices.DROPDOWN,
  overflow: 'hidden',
  backgroundColor: vars.color.white,
  borderRadius: vars.borderRadius.md,
  boxShadow: vars.color.shadow,
  cursor: 'pointer',
});

const selectViewport = style({
  padding: '5px',
});

const selectItem = style({
  lineHeight: '1',
  color: vars.color.primary_text,
  borderRadius: vars.borderRadius.sm,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '25px',
  padding: '0 10px',
  userSelect: 'none',
  selectors: {
    '&[data-disabled]': {
      outline: 'none',
      color: vars.color.disabled_text,
      backgroundColor: vars.color.disabled,
      cursor: 'disabled',
    },
    '&[data-highlighted]': {
      outline: 'none',
      backgroundColor: vars.color.blue3,
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
  backgroundColor: vars.color.border,
  margin: '5px',
});

const selectScrollButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '20px',
  color: vars.color.primary_text,
  cursor: 'default',
});

export {
  selectContent,
  selectIcon,
  selectItem,
  selectLabel,
  selectScrollButton,
  selectSeparator,
  selectTrigger,
  selectValue,
  selectViewport,
};
