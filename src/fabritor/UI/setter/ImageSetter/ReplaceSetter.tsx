import { Popover, Button } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import ImageSelector from '@/fabritor/components/ImageSelector';

export default function ReplaceSetter (props) {
  const { onChange } = props;

  return (
    <Popover
      content={
        <ImageSelector size="middle" type="default" onChange={onChange} />
      }
      placement="top"
      trigger="click"
    >
      <Button type="dashed" block icon={<FileImageOutlined />}>Replace Picture</Button>
    </Popover>
  );
}