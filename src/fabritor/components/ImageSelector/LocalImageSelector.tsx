import { useRef } from 'react';
import { Button } from 'antd';
import LocalFileSelector from '../LocalFileSelector';

export default function LocalImageSelector (props) {
  const { onChange, ...rest } = props;
  const localFileSelectorRef = useRef<any>();

  const handleClick = () => {
    localFileSelectorRef.current?.start?.();
  }

  const handleFileChange = (file) => {
    if (file.type === 'image/svg+xml') {
      // const url = URL.createObjectURL(file);
      // addSvg?.({ url });
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (revt) => {
      onChange?.(revt.target.result);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <Button size="default" type='dashed' onClick={handleClick} {...rest}>
        Local Image
      </Button>

      <LocalFileSelector accept="image/*" ref={localFileSelectorRef} onChange={handleFileChange} />
    </div>
  );
}