import Row from '@/common/_Grid/Row';

import * as styles from './navigationStyle.css';

const Navigation = () => {
  return (
    <Row justify="between" align="center" className={styles.navWrapper}>
      <button>1</button>
      <button>1</button>
      <button>1</button>
      <button>1</button>
    </Row>
  );
};

export default Navigation;
