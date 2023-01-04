import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/vars.css';

const base = {
  fontWeight: vars.fontWeights.bold,
  transition: 'all 0.3s ease',
  border: 'none',
  selectors: {
    '&:disabled': {
      opacity: '0.64',
    },
  },
};

const variants = {
  color: {
    primary: {
      backgroundColor: vars.color.primary_btn,
      color: vars.color.white,
      selectors: {
        '&:active': {
          backgroundColor: vars.color.blue6,
        },
        '&:hover': {
          backgroundColor: vars.color.blue6,
        },
      },
    },
    secondary: {
      backgroundColor: vars.color.gray6,
      color: vars.color.white,
      selectors: {
        '&:active': {
          backgroundColor: vars.color.gray7,
        },
        '&:hover': {
          backgroundColor: vars.color.gray7,
        },
      },
    },
    tertiary: {
      backgroundColor: vars.color.gray2,
      color: vars.color.gray6,
      selectors: {
        '&:active': {
          backgroundColor: vars.color.gray3,
        },
        '&:hover': {
          backgroundColor: vars.color.gray3,
        },
      },
    },
  },
  sizes: {
    sm: { padding: '12px 20px', fontSize: vars.fontSize.body1 },
    md: { padding: '16px 24px', fontSize: vars.fontSize.body1 },
    lg: { padding: '18px 24px', fontSize: vars.fontSize.body1 },
  },
  radii: {
    rect: { borderRadius: '4px' },
    round: { borderRadius: '30px' },
  },
  outlined: {
    primary: {
      border: 'solid 1pxvars.color.primary',
      color: vars.color.primary_text,
      backgroundColor: 'transparent',
      '&:active': {
        backgroundColor: 'rgba(217, 244, 254, 0.32)',
      },
      '&:hover': {
        backgroundColor: 'rgba(217, 244, 254, 0.32)',
      },
    },
    secondary: {
      border: 'solid 1pxvars.color.secondary',
      color: vars.color.secondary_text,
      backgroundColor: 'transparent',
      '&:active': {
        backgroundColor: vars.color.gray1,
      },
      '&:hover': {
        backgroundColor: vars.color.gray1,
      },
    },
    tertiary: {
      border: 'solid 1pxvars.color.tertiary',
      color: vars.color.tertiary_text,
      backgroundColor: 'transparent',
      selectors: {
        '&:active': {
          backgroundColor: vars.color.g_trans1,
        },
        '&:hover': {
          backgroundColor: vars.color.g_trans1,
        },
      },
    },
  },
  types: {
    badge: {
      color: vars.color.primary_text,
      backgroundColor: vars.color.gray2,
      padding: '10px 16px',
      borderRadius: '17px',
      fontWeight: '600',
      selectors: {
        '&:active': {
          backgroundColor: vars.color.tertiary_pressed,
        },
        '&:hover': {
          backgroundColor: vars.color.tertiary_pressed,
        },
        // '& svg': {
        //   width: '14px',
        //   height: '14px',
        // },
      },
    },
    default: {
      backgroundColor: 'transparent',
      color: vars.color.secondary_text,
      fontSize: vars.fontSize.body2,
      padding: '0px',
      border: 'none',
      selectors: {
        '&:active': {
          backgroundColor: 'transparent',
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
};

// STYLE TEXT //////////////////////////
export const button = recipe({
  base: base,
  variants: variants,
  defaultVariants: {
    color: 'primary',
    radii: 'rect',
    sizes: 'md',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
export interface ButtonVariantProps {
  color?: keyof typeof variants.color; //"primary" | "secondary" | "tertiary" | undefined
  sizes?: keyof typeof variants.sizes;
  radii?: keyof typeof variants.radii;
  outlined?: keyof typeof variants.outlined;
  types?: keyof typeof variants.types;
}
