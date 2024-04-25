import { Dropdown, Button, Divider, message } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { downloadFile, base64ToBlob } from '@/utils';
import { useContext, useRef } from 'react';
import { GlobalStateContext } from '@/context';
import LocalFileSelector from '@/fabritor/components/LocalFileSelector';
import { CenterV } from '@/fabritor/components/Center';
import { SETTER_WIDTH } from '@/config';

const items: MenuProps['items'] = [
  {
    key: 'jpg',
    label: 'Export as JPG'
  },
  {
    key: 'png',
    label: 'Export as PNG'
  },
  {
    key: 'svg',
    label: 'Export as SVG'
  },
  {
    key: 'json',
    label: 'Export as JSON'
  },
  {
    type: 'divider'
  },
  {
    key: 'clipboard',
    label: 'Copy to Clipboard'
  }
]

export default function Export () {
  const { editor, setReady, setActiveObject } = useContext(GlobalStateContext);
  const localFileSelectorRef = useRef<any>();

  const selectJsonFile = () => {
    localFileSelectorRef.current?.start?.();
  }

  const handleFileChange = (file) => {
    setReady(false);
    const reader = new FileReader();
    reader.onload = (async (evt) => {
      const json = evt.target?.result as string;
      if (json) {
        await editor.loadFromJSON(json, true);
        editor.fhistory.reset();
        setReady(true);
        setActiveObject(null);
        editor.fireCustomModifiedEvent();
      }
    });
    reader.readAsText(file);
  }

  const copyImage = async () => {
    try {
      const png = editor.export2Img({ format: 'png' });
      const blob = await base64ToBlob(png);
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob
        })
      ]);
      message.success('Copied successfully');
    } catch(e) {
      message.error('Copy failed, please choose to export to local');
    }
  }

  const handleClick = ({ key }) => {
    const { sketch } = editor;
    // @ts-ignore
    const name = sketch.fabritor_desc;
    switch (key) {
      case 'png':
        const png = editor.export2Img({ format: 'png' });
        downloadFile(png, 'png', name);
        break;
      case 'jpg':
        const jpg = editor.export2Img({ format: 'jpg' });
        downloadFile(jpg, 'jpg', name);
        break;
      case 'svg':
        const svg = editor.export2Svg();
        downloadFile(svg, 'svg', name);
        break;
      case 'json':
        const json = editor.canvas2Json();
        downloadFile(`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(json, null, 2)
        )}`, 'json', name);
        break;
      case 'clipboard':
        copyImage();
        break;
      default:
        break;
    }
  }
  return (
    <CenterV
      justify="flex-end"
      gap={16}
      style={{
        width: SETTER_WIDTH,
        paddingRight: 16
      }}
    >
      <Button onClick={selectJsonFile}>
        Load
      </Button>
      <Dropdown 
        menu={{ items, onClick: handleClick }} 
        arrow={{ pointAtCenter: true }}
        placement="bottom"
      >
        <Button type="dashed" icon={<ExportOutlined />}>Export</Button>
      </Dropdown>
      <LocalFileSelector accept="application/json" ref={localFileSelectorRef} onChange={handleFileChange} />
    </CenterV>
  )
}