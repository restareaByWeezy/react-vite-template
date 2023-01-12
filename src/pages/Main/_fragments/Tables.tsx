import React from 'react';

import Collapse from '@/components/Collapse';
import Table from '@/components/Table';
import { ColumnProps } from '@/components/Table/table';
import Text from '@/components/Text/Text';

import { tableData, TableDataprops } from '../_constants';

const Tables = () => {
  const columns: ColumnProps<TableDataprops>[] = [
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

  return (
    <>
      <Text size="h2" weight="bold">
        Table
      </Text>
      <Table data={tableData} columns={columns} size="sm" />
      <Table data={tableData} columns={columns} size="md" />
      <Table data={tableData} columns={columns} size="lg" />
      <Collapse isLoading={true} renderer={<div>hi</div>} />
    </>
  );
};

export default Tables;
