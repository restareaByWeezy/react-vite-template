import React, { MouseEventHandler } from 'react';
import { ColumnProps } from '.';

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
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
