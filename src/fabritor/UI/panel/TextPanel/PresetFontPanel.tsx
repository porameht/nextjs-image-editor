import { Flex, Card } from 'antd';
import Title from '@/fabritor/components/Title';

const PRESET_FONT_LIST = [
  {
    label: <div style={{ fontSize: 30, fontFamily: 'SmileySans', fontWeight: 'bold' }}>Add title</div>,
    key: 'title',
    config: {
      fontFamily: 'SmileySans',
      fontWeight: 'bold',
      fontSize: 120,
      text: 'Add title',
      top: 100
    }
  },
  {
    label: <div style={{ fontSize: 24, fontFamily: 'AlibabaPuHuiTi' }}>Add subtitle</div>,
    key: 'sub-title',
    config: {
      fontFamily: 'AlibabaPuHuiTi',
      fontWeight: 'bold',
      fontSize: 100,
      text: 'Add subtitle',
      top: 400
    }
  },
  {
    label: <div style={{ fontSize: 16, fontFamily: 'SourceHanSerif' }}>Add a text</div>,
    key: 'content',
    config: {
      fontFamily: 'SourceHanSerif',
      fontSize: 80,
      text: 'Add a text'
    }
  },
  {
    label: <div style={{ fontSize: 26, fontFamily: '霞鹜文楷', color: '#ffffff' , WebkitTextStroke: '1px rgb(255, 87, 87)' }}>Text border</div>,
    key: 'content',
    config: {
      fontFamily: '霞鹜文楷',
      fontSize: 100,
      text: 'Text border',
      fill: '#ffffff',
      stroke: '#ff5757',
      strokeWidth: 12
    }
  }
]

export default function PresetFontPanel (props) {
  const { addTextBox } = props;

  const handleClick = (item) => {
    addTextBox?.(item.config);
  }

  return (
    <Flex vertical gap={8} style={{ marginTop: 16 }}>
      <Title>Default text style</Title>
      {
        PRESET_FONT_LIST.map(item => (
          <Card
            key={item.key}
            hoverable
            onClick={() => { handleClick(item) }}
            // bodyStyle={{
            //   padding: '12px 30px'
            // }}
          >
            {item.label}
          </Card>
        ))
      }
    </Flex>
  );
}