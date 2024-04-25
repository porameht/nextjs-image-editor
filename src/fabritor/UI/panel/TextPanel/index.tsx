import { Button } from 'antd';
import PresetFontPanel from './PresetFontPanel';
import { createTextbox } from '@/editor/objects/textbox';
import { useContext } from 'react';
import { GlobalStateContext } from '@/context';

export default function TextPanel () {
  const { editor } = useContext(GlobalStateContext);
  
  const handleAddText = async (options) => {
    await createTextbox({  ...options, canvas: editor.canvas });
  }

  return (
    <div className="fabritor-panel-wrapper">
      <Button type="dashed" block onClick={() => { handleAddText({}) }} size="large">
        Add Text Box
      </Button>
      <PresetFontPanel addTextBox={handleAddText} />
    </div>
  )
}