import cx from 'classnames';
import { get } from 'lodash';

import { ColumnProps } from './table';
import * as styles from './table.css';

interface TableRowCellProps<T> {
  item: T;
  column: ColumnProps<T>;
}

export function TableRowCell<T>({
  item,
  column,
}: TableRowCellProps<T>): JSX.Element {
  const value = get(item, column.key);
  return (
    <td className={cx(styles.td, column.style?.bodyColStyle)}>
      {column.render ? column.render(column, item) : value}
    </td>
  );
}
