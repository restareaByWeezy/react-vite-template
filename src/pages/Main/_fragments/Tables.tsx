import React from 'react';

import Col from '@/components/_Grid/Col';
import Text from '@/components/Text/Text';
import Table, { ColumnProps } from '@/components/Table';
import Collapse from '@/components/Collapse';

const Tables = () => {
  interface IData {
    fullName: string;
    role: string;
    tags: string[];
  }
  const columns: ColumnProps<IData>[] = [
    {
      key: 'fullName',
      title: 'Full Name',
      width: 200,
    },
    {
      key: 'role',
      title: 'Role',
      width: 200,
    },
    {
      key: 'tags',
      title: 'Tags',
      width: 200,
      render: (_, { tags }) => (
        <>
          {tags.map((tag, tagIndex) => (
            <Text key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
              {tag}
            </Text>
          ))}
        </>
      ),
    },
  ];

  const data: IData[] = [
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

  return (
    <>
      <Text size="h2" weight="bold">
        Table
      </Text>
      <Table data={data} columns={columns} size="sm" />
      <Table data={data} columns={columns} size="md" />
      <Table data={data} columns={columns} size="lg" />
      <Collapse isLoading={true} renderer={<div>hi</div>} />
    </>
  );
};

export default Tables;
