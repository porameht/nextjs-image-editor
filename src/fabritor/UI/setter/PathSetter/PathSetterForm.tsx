import { Form } from 'antd';
import SolidColorSetter from '../ColorSetter/Solid';
import ColorSetter from '../ColorSetter';
import SliderInputNumber from '@/fabritor/components/SliderInputNumber';
import { useContext, useEffect } from 'react';
import { GlobalStateContext } from '@/context';

const { Item: FormItem } = Form;

export default function PathSetterForm (props) {
  const { value, onChange, shouldFireEvent, showPenTip, showFillConfig } = props;
  const [form] = Form.useForm();
  const { editor } = useContext(GlobalStateContext);

  const fireEvent = () => {
    if (shouldFireEvent) {
      editor.fireCustomModifiedEvent();
    }
  }

  useEffect(() => {
    form.setFieldsValue(value);
  }, [value]);

  return (
    <Form
      form={form}
      onValuesChange={onChange}
      style={{ marginBottom: 0, marginTop: 16 }}
      colon={false}
    >
      {showPenTip ? <FormItem label={<span style={{ fontSize: 15, fontWeight: 'bold' }}>Brush</span>} /> : null }
      <FormItem
        label={showFillConfig ? 'Stroke' : 'Color'}
        name="color"
      >
        <SolidColorSetter onChange={fireEvent} />
      </FormItem>
      <FormItem
        label="Line width"
        name="width"
      >
        <SliderInputNumber min={1} max={100} onChangeComplete={fireEvent} />
      </FormItem>
      {
        showFillConfig ?
        <FormItem
          label="Filling"
          name="fill"
        >
          <ColorSetter onChange={fireEvent} />
        </FormItem> : null
      }
      <FormItem label={<span style={{ fontSize: 15, fontWeight: 'bold' }}>Shadow</span>} />
      <FormItem
        label="Color"
        name={['shadow', 'color']}
      >
        <SolidColorSetter onChange={fireEvent} />
      </FormItem>
      <FormItem
        label="Width"
        name={['shadow', 'width']}
      >
        <SliderInputNumber min={0} max={50} onChangeComplete={fireEvent} />
      </FormItem>
      <FormItem
        label="Offset"
        name={['shadow', 'offset']}
      >
        <SliderInputNumber min={0} max={20} onChangeComplete={fireEvent} />
      </FormItem>
    </Form>
  )
}