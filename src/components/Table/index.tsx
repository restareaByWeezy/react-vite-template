import Card from '../Card';
import ScrollArea from '../ScrollArea';
import { TableProps } from './table';
import * as styles from './table.css';
import TableHeader from './TableHead';
import TableRow from './TableRow';

const Table = <T extends {}>({
  size,
  columns,
  data,
  tableStyle,
}: TableProps<T>) => {
  return (
    <Card size={size}>
      <div className={styles.scrollAreaWrapper}>
        <ScrollArea>
          <table className={tableStyle?.table || styles.table}>
            <thead className={tableStyle?.tableHead || styles.tableHead}>
              <TableHeader columns={columns} />
            </thead>
            <tbody className={tableStyle?.tableBody}>
              <TableRow data={data} columns={columns} />
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </Card>
  );
};

export default Table;
