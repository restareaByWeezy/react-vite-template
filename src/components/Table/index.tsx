import Card from '../Card';
import ScrollArea from '../ScrollArea';
import * as styles from './table.css';
import TableHeader from './TableHead';
import TableRow from './TableRow';

export interface ColumnProps<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: ColumnProps<T>, item: T) => void;
}
interface TableProps<T> {
  size?: 'sm' | 'md' | 'lg';
  data: T[];
  columns: ColumnProps<T>[];
}

interface IData {
  fullName: string;
  role: string;
  tags: string[];
}

const Table = <T extends {}>({ size, columns, data }: TableProps<T>) => {
  return (
    <Card size={size}>
      <div className={styles.scrollAreaWrapper}>
        <ScrollArea>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <TableHeader columns={columns} />
            </thead>
            <tbody>
              <TableRow data={data} columns={columns} />
            </tbody>
          </table>
        </ScrollArea>
      </div>
    </Card>
  );
};

export default Table;
