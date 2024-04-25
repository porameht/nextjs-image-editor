import { Button } from 'antd';
import { useContext } from 'react';
import { GlobalStateContext } from '@/context';
import { groupSelection, ungroup } from '@/utils/helper';

export default function GroupSetter () {
  const { object, editor } = useContext(GlobalStateContext);

  if (!object || (object.type !== 'group' && object.type !== 'activeSelection')) return null;

  return (
    <div>
      {
        object.type === 'group' ?
        <Button type="dashed" block onClick={() => { ungroup(editor.canvas, object); }}>Ungroup</Button> :
        <Button type="dashed" block onClick={() => { groupSelection(editor.canvas, object); }}>Group</Button>
      }
    </div>
  )
}