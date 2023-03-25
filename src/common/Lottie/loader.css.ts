import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {},
  variants: {
    size: {
      sm: {
        width: '20px',
        height: '20px',
      },
      md: {
        width: '40px',
        height: '40px',
      },
      lg: {
        width: '60px',
        height: '60px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
