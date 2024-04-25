import { useContext, useEffect, useState } from 'react';
import { Modal } from 'antd';
import { GlobalStateContext } from '@/context';
import { DRAG_ICON } from '@/assets/icon';
import { ClearOutlined, DragOutlined, ExclamationCircleFilled, UndoOutlined, RedoOutlined } from '@ant-design/icons';
import { CenterV } from '@/fabritor/components/Center';
import ToolbarItem from './ToolbarItem';
import ToolbarDivider from '@/fabritor/components/ToolbarDivider';

import './index.scss';

export default function Toolbar () {
  const { setActiveObject, editor } = useContext(GlobalStateContext);
  const [panEnable, setPanEnable] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const clearCanvas = () => {
    Modal.confirm({
      title: 'Confirm to clear the canvas and clear the historical operation records?',
      icon: <ExclamationCircleFilled />,
      async onOk () {
        await editor.clearCanvas();
        setActiveObject(editor.sketch);
        editor.fireCustomModifiedEvent();
      },
      okText: 'Confirm',
      cancelText: 'Cancel'
    });
  }

  const enablePan = () => {
    const enable = editor.switchEnablePan();
    setPanEnable(enable);
  }

  useEffect(() => {
    if (editor) {
      setCanUndo(editor.fhistory.canUndo());
      setCanRedo(editor.fhistory.canRedo());
    }
  });

  return (
    <CenterV gap={4} style={{ borderRight: '1px solid #e8e8e8', paddingRight: 12 }}>
      <ToolbarItem disabled={!canUndo} title="Undo" onClick={() => { editor.fhistory.undo() }}>
        <UndoOutlined style={{ fontSize: 20 }} />
      </ToolbarItem>
      <ToolbarItem disabled={!canRedo} title="Redo" onClick={() => { editor.fhistory.redo() }}>
        <RedoOutlined style={{ fontSize: 20 }} />
      </ToolbarItem>
      <ToolbarDivider />
      <ToolbarItem onClick={enablePan} title={panEnable ? 'Select element' : 'Drag canvas'}>
        {
          panEnable? 
          <DragOutlined style={{ fontSize: 22, color: panEnable ? '#000' : '#ccc' }} /> :
          <img src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(DRAG_ICON)}`} style={{ width: 22, height: 22 }} />
        }
      </ToolbarItem>
      <ToolbarItem onClick={clearCanvas} title="Clear canvas">
        <ClearOutlined style={{ fontSize: 20 }} />
      </ToolbarItem>
    </CenterV>
  )
}