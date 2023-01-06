import React, { useState } from 'react';
import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from '@minoru/react-dnd-treeview';
import { DndProvider } from 'react-dnd';
import { treeData } from './_fakeData';

const TestDnd = () => {
  const [treeDatas, setTreeDatas] = useState(treeData);
  const handleDrop = (newTreeData: any) => setTreeDatas(newTreeData);

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree
        tree={treeDatas}
        rootId={0}
        onDrop={handleDrop}
        render={(node, { depth, isOpen, onToggle }) => (
          <div style={{ marginLeft: depth * 10 }}>
            {node.droppable && (
              <span onClick={onToggle}>{isOpen ? '[-]' : '[+]'}</span>
            )}
            {node.text}
          </div>
        )}
      />
    </DndProvider>
  );
};

export default TestDnd;
