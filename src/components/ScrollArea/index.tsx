import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import { ReactNode } from 'react';

import * as styles from './ScrollArea.css';

interface ScrollAreaProps {
  children?: ReactNode;
  scrollbarStyle?: string;
  thumbStyle?: string;
}

const ScrollArea = ({
  children,
  scrollbarStyle,
  thumbStyle,
}: ScrollAreaProps) => (
  <RadixScrollArea.Root className={styles.root}>
    <RadixScrollArea.Viewport className={styles.viewport}>
      {children}
    </RadixScrollArea.Viewport>
    <RadixScrollArea.Scrollbar
      className={scrollbarStyle || styles.scrollbar}
      orientation="vertical"
    >
      <RadixScrollArea.Thumb className={thumbStyle || styles.thumb} />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Scrollbar
      className={scrollbarStyle || styles.scrollbar}
      orientation="horizontal"
    >
      <RadixScrollArea.Thumb className={thumbStyle || styles.thumb} />
    </RadixScrollArea.Scrollbar>
    <RadixScrollArea.Corner className={styles.corner} />
  </RadixScrollArea.Root>
);

export default ScrollArea;
