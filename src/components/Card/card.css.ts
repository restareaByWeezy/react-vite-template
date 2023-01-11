import { vars } from '@/styles/vars.css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {
    padding: vars.space.sm,
    borderRadius: vars.borderRadius.sm,
    backgroundColor: vars.color.white,
    boxShadow: vars.color.shadow,
  },
  variants: {
    size: {
      sm: {
        width: '200px',
        minHeight: '200px',
        padding: vars.space.sm,
      },
      md: {
        width: '300px',
        minHeight: '300px',
        padding: vars.space.md,
      },
      lg: {
        width: '400px',
        minHeight: '400px',
        padding: vars.space.lg,
      },
    },
  },
});
