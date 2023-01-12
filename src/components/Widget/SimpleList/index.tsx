import WidgetLayout from '../Layout/WidgetLayout';
import * as styles from './simpleList.css';

const SimpleList = () => {
  return (
    <WidgetLayout title="simple list">
      <div className={styles.header}>
        <h1>channel</h1>
        <h1>cost</h1>
      </div>
      <ul className={styles.listWrapper}>
        <li className={styles.list}>
          <div>1</div>
          <div>2</div>
        </li>
        <li className={styles.list}>
          <div>1</div>
          <div>2</div>
        </li>
        <li className={styles.list}>
          <div>1</div>
          <div>2</div>
        </li>
      </ul>
      <div>result</div>
    </WidgetLayout>
  );
};

export default SimpleList;
