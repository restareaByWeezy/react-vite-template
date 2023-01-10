import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

const base = {
  fontSize: vars.fontSize.body1,
  color: vars.color.primary_text,
  padding: '8px 6px',
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.borderRadius.s,
  backgroundColor: vars.color.white,
  transition: 'border-color 0.2s ease-in-out',

  selectors: {
    '&:hover': {
      outline: 'none',
      backgroundColor: vars.color.g_trans1,
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: vars.color.white,
      borderColor: vars.color.primary,
    },
  },
};
const variants = {
  size: {
    s: {
      width: '30px',
      height: '30px',
    },
    m: {
      width: '40px',
      height: '40px',
    },
    l: {
      width: '50px',
      height: '50px',
    },
  },
};

// STYLE TEXT //////////////////////////
export const input = recipe({
  base: base,
  variants: variants,
});

export type InputVariants = RecipeVariants<typeof input>;
