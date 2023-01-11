import ScrollArea from '@/components/ScrollArea';
import Text from '@/components/Text/Text';

import * as styles from '../styles/ScrollAreas.css';

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

const ScrollAreas = () => (
  <>
    <Text size="h2" weight="bold">
      Scroll Area
    </Text>
    <ScrollArea className={styles.wrapper}>
      <div className={styles.text}>Scroll Area</div>
      {TAGS.map((tag) => (
        <div className={styles.tag} key={tag}>
          {tag}
        </div>
      ))}
    </ScrollArea>
  </>
);

export default ScrollAreas;
