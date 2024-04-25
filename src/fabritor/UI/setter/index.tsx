import { useContext } from 'react';
import { Divider, Layout, Typography } from 'antd';
import { GlobalStateContext } from '@/context';
import { SKETCH_ID } from '@/utils/constants';
import SketchSetter from './SketchSetter';
import TextSetter from './TextSetter';
import ImageSetter from './ImageSetter';
import { LineSetter, ShapeSetter } from './ShapeSetter';
import { CenterV } from '@/fabritor/components/Center';
import CommonSetter from './CommonSetter';
import GroupSetter from './GroupSetter';
import PathSetter from './PathSetter';
import RoughSetter from './RoughSetter';
import { SETTER_WIDTH } from '@/config';

const { Sider } = Layout;
const { Title } = Typography;

const siderStyle: React.CSSProperties = {
  position: 'relative',
  backgroundColor: '#fff',
  borderLeft: '1px solid #e8e8e8'
};

export default function Setter () {
  const { object, isReady } = useContext(GlobalStateContext);
  const objectType = object?.get?.('type') || '';
  console.log('objectType', objectType, object);

  const getRenderSetter = () => {
    if (!isReady) return null;
    if (!object || object.id === SKETCH_ID) return <SketchSetter />;
    switch (objectType) {
      case 'textbox':
      case 'f-text':
        return <TextSetter />;
      case 'rect':
      case 'circle':
      case 'triangle':
      case 'polygon':
      case 'ellipse':  
        return <ShapeSetter />;
      case 'f-line':
      case 'f-arrow':
      case 'f-tri-arrow':
        return <LineSetter />;
      case 'f-image':
        return <ImageSetter />;
      case 'path':
        if (object?.sub_type === 'rough') {
          return <RoughSetter />
        }
        return <PathSetter />;
      case 'group':
        if (object?.sub_type === 'rough') {
          return <RoughSetter />
        }
        return <GroupSetter />;
      case 'activeSelection':
        return <GroupSetter />;
      default:
        return null;
    }
  }

  const renderSetter = () => {
    const Setter = getRenderSetter();
    if (Setter) {
      return (
        <>
        {Setter}
        <Divider />
        </>
      )
    }
    return null;
  }

  const getSetterTitle = () => {
    if (!isReady) return null;
    if (!object || object.id === SKETCH_ID) return 'Canvas';
    switch (objectType) {
      case 'textbox':
      case 'f-text':
        return 'Text';
      case 'rect':
      case 'circle':
      case 'triangle':
      case 'polygon':
      case 'ellipse':  
        return 'Shape';
      case 'line':
      case 'f-line':
      case 'f-arrow':
      case 'f-tri-arrow':
        return 'Line';
      case 'f-image':
        return 'Image';
      case 'image':
        return 'Configuration'
      case 'path':
        if (object?.sub_type) {
          if (object?.sub_type === 'rough') {
            return 'Hand-drawn style';
          }
          return 'Shape';
        }
        return 'Brush'
      case 'group':
        if (object?.sub_type === 'rough') {
          return 'Hand-drawn style';
        }
        return 'Group';
      case 'activeSelection':
        return 'Group';
      default:
        return 'Canvas';
    }
  }

  const renderSetterTitle = () => {
    const title = getSetterTitle();
    if (!title) {
      return null;
    }
    return (
      <CenterV style={{ borderBottom: '1px solid #e8e8e8', paddingLeft: 16 }}>
        <Title level={5}>
          {getSetterTitle()}
        </Title>
      </CenterV>
    )
  }

  return (
    <Sider
      style={siderStyle}
      width={SETTER_WIDTH}
      className="fabritor-sider"
    >
      {renderSetterTitle()}
      <div
        style={{ padding: 16 }}
      >
        {renderSetter()}
        <CommonSetter />
      </div>
    </Sider>
  )
}