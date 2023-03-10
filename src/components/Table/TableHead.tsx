import cx from 'classnames';
import React, { MouseEventHandler } from 'react';

import { ColumnProps } from './table';
import * as styles from './table.css';
interface TableHeaderProps<T> {
  columns: ColumnProps<T>[];
}

const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          key={`table-head-cell-${columnIndex}`}
          style={{ width: column.width }}
          className={cx(styles.th, column.style?.headerColStyle)}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
