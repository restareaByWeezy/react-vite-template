import { get } from 'lodash';

import { ColumnProps } from '.';

interface TableRowCellProps<T> {
  item: T;
  column: ColumnProps<T>;
}

export function TableRowCell<T>({
  item,
  column,
}: TableRowCellProps<T>): JSX.Element {
  const value = get(item, column.key);
  return <td>{column.render ? column.render(column, item) : value}</td>;
}
