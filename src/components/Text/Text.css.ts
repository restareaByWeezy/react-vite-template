import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

const base = {
  fontSize: vars.fontSize.body1,
  color: vars.color.primary_text,
};
const variants = {
  size: {
    h1: {
      fontSize: vars.fontSize.h1,
    },
    h2: {
      fontSize: vars.fontSize.h2,
    },
    h4: {
      fontSize: vars.fontSize.h4,
    },
    body1: {
      fontSize: vars.fontSize.body1,
    },
    body2: {
      fontSize: vars.fontSize.body2,
    },
    body3: {
      fontSize: vars.fontSize.body3,
    },
  },
  color: {
    primary: {
      color: vars.color.primary_text,
    },
    secondary: {
      color: vars.color.secondary_text,
    },
    tertiary: {
      color: vars.color.tertiary_text,
    },
  },
  weight: {
    semiBold: {
      fontWeight: vars.fontWeight.semiBold,
    },
    bold: {
      fontWeight: vars.fontWeight.bold,
    },
  },
};

// STYLE TEXT //////////////////////////
export const text = recipe({
  base: base,
  variants: variants,
});

export type TextVariants = RecipeVariants<typeof text>;
export interface TextVariantProps {
  size?: keyof typeof variants.size;
  color?: keyof typeof variants.color;
  weight?: keyof typeof variants.weight;
}
