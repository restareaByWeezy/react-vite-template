import { ColumnProps } from '.';
import { TableRowCell } from './TableRowCell';

interface TableRowProps<T> {
  data: T[];
  columns: ColumnProps<T>[];
}

const TableRow = <T,>({ data, columns }: TableRowProps<T>) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
            />
          ))}
        </tr>
      ))}
    </>
  );
};

export default TableRow;
