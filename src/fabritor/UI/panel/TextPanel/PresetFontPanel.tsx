import { Flex, Card } from 'antd';
import Title from '@/fabritor/components/Title';

export const PRESET_FONT_LIST = [
  {
    label: <div style={{ fontSize: 30, fontFamily: 'Arial', fontWeight: 'bold' }}>Add title</div>,
    key: 'title',
    config: {
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fontSize: 120,
      text: 'Add title',
      top: 100
    }
  },
  {
    label: <div style={{ fontSize: 24, fontFamily: 'Helvetica' }}>Add subtitle</div>,
    key: 'sub-title',
    config: {
      fontFamily: 'Helvetica',
      fontWeight: 'bold',
      fontSize: 100,
      text: 'Add subtitle',
      top: 400
    }
  },
  {
    label: <div style={{ fontSize: 16, fontFamily: 'Times New Roman' }}>Add a text</div>,
    key: 'content',
    config: {
      fontFamily: 'Times New Roman',
      fontSize: 80,
      text: 'Add a text'
    }
  },
  {
    label: <div style={{ fontSize: 26, fontFamily: 'Courier New', color: '#ffffff', WebkitTextStroke: '1px rgb(255, 87, 87)' }}>Text border</div>,
    key: 'content',
    config: {
      fontFamily: 'Courier New',
      fontSize: 100,
      text: 'Text border',
      fill: '#ffffff',
      stroke: '#ff5757',
      strokeWidth: 12
    }
  }
];

export const DEFAULT_FONT = {
  label: (
    <div style={{ fontSize: 16, fontFamily: 'Arial' }}>Default Text Style</div>
  ),
  key: 'default-text',
  config: {
    fontFamily: 'Arial',
    fontSize: 80,
    text: 'Default Text Style',
  },
}

export default function PresetFontPanel (props) {
  const { addTextBox } = props;

  const handleClick = (item) => {
    addTextBox?.(item.config);
  }

  return (
    <Flex vertical gap={8} style={{ marginTop: 16 }}>
      <Title>{DEFAULT_FONT.label}</Title>
      {PRESET_FONT_LIST.map((item) => (
        <Card
          key={item.key}
          hoverable
          onClick={() => {
            handleClick(item)
          }}
        >
          {item.label}
        </Card>
      ))}
    </Flex>
  )
}