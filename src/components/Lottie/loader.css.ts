import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {},
  variants: {
    size: {
      s: {
        width: '20px',
        height: '20px',
      },
      m: {
        width: '40px',
        height: '40px',
      },
      l: {
        width: '60px',
        height: '60px',
      },
    },
  },
  defaultVariants: {
    size: 'm',
  },
});
