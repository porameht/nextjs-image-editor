import { fabric } from 'fabric';
import AppSubPanel from './AppSubPanel';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { createTextbox } from '@/editor/objects/textbox';
import { useContext } from 'react';
import { GlobalStateContext } from '@/context';

export default function EmojiPanel (props) {
  const { back } = props;
  const { editor } = useContext(GlobalStateContext);

  const handleEmojiSelect = async (emoji) => {
    const object = editor.canvas.getActiveObject() as fabric.Textbox;
    if (object && object.type === 'textbox') {
      object.set('text', `${object.text}${emoji.native}`);
      editor.canvas.requestRenderAll();
    } else {
      await createTextbox({
        text: emoji.native,
        fontSize: 80,
        width: 100,
        canvas: editor.canvas
      });
    }
  }

  return (
    <AppSubPanel title="Emoji" back={back}>
      <Picker
        data={data}
        perLine={6}
        set="native"
        locale="en"
        onEmojiSelect={handleEmojiSelect}
      />
    </AppSubPanel>
  )
}