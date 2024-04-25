import { useContext, useEffect } from 'react';
import { fabric } from 'fabric';
import { Form } from 'antd';
import ColorSetter from '../ColorSetter/Solid';
import { GlobalStateContext } from '@/context';

const { Item: FormItem } = Form;

export default function RoughSetter() {
  const [form] = Form.useForm();
  const { editor, object } = useContext(GlobalStateContext);

  const handleValuesChange = (values) => {
    Object.keys(values).forEach((key) => {
      if (object.type === 'path') {
        object.set('stroke', values[key]);
      } else {
        const _objects = (object as fabric.Group).getObjects();
        if (key === 'stroke') {
          _objects[1].set('stroke', values[key]);
        } else if (key === 'fill') {
          _objects[0].set('stroke', values[key]);
        }
      }
    });
    editor.canvas.requestRenderAll();
    editor.fireCustomModifiedEvent();
  }

  useEffect(() => {
    if (object?.sub_type) {
      if (object.type === 'path') {
        form.setFieldsValue({
          stroke: object.stroke
        });
      } else {
        const _objects = (object as fabric.Group).getObjects();
        form.setFieldsValue({
          stroke: _objects[1].stroke,
          fill: _objects[0].stroke
        });
      }
    }
  }, [editor]);

  return (
    <Form
      colon={false}
      form={form}
      onValuesChange={handleValuesChange}
    >
      <FormItem
        label="Stroke"
        name="stroke"
      >
        <ColorSetter />
      </FormItem>
      {
        object?.type === 'group' ?
        <FormItem
          label="Fill"
          name="fill"
        >
          <ColorSetter />
        </FormItem> : null
      }
    </Form>
  );
}