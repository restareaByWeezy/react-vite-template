import { ColumnProps } from '@/components/Table/table';

export interface TableDataprops {
  fullName: string;
  role: string;
  tags: string[];
}

interface SimpleDataProps {
  channel: string;
  impression: number;
}

export const tableData: TableDataprops[] = [
  {
    fullName: 'Francisco Mendes',
    role: 'Full Stack',
    tags: ['dev', 'blogger'],
  },
  {
    fullName: 'Ricardo Malva',
    role: 'Social Media Manager',
    tags: ['designer', 'photographer'],
  },
];

export const simpleTableData = [
  {
    channel: 'Facebook',
    impression: 1000,
  },
  {
    channel: 'Instagram',
    impression: 2000,
  },
  {
    channel: 'Twitter',
    impression: 3000,
  },
];

export const simpleColumns: ColumnProps<SimpleDataProps>[] = [
  {
    key: 'channel',
    title: 'Channel',
    width: 200,
  },
  {
    key: 'impression',
    title: 'Impression',
    width: 200,
  },
];
