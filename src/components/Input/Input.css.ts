import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

const base = {
  fontSize: vars.fontSize.body1,
  color: vars.color.primary_text,
};
const variants = {};

// STYLE TEXT //////////////////////////
export const input = recipe({
  base: base,
  variants: variants,
});

export type InputVariants = RecipeVariants<typeof input>;
