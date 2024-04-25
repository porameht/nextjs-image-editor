import { useState } from 'react';
import { Button, Input, Popover, Space } from 'antd';

export default function RemoteImageSelector (props) {
  const { onChange, ...rest } = props;
  const [url, setUrl] = useState('');

  const handleClick = () => {
    if (url) {
      onChange?.(url);
    }
  }

  return (
    <Popover
      content={
        <Space.Compact>
          <Input value={url} onChange={(e) => { setUrl(e.target.value) }} style={{ width: 260 }} />
          <Button onClick={handleClick}>Confirm</Button>
        </Space.Compact>
      }
      title="Please enter address: "
      trigger="click"
    >
      <Button size="default" type='dashed' {...rest}>
        Remote Image
      </Button>
    </Popover>
  );
}