export const APP_NAME = 'fabritor';
export const APP_VERSION = '3.0.0';
export const SCHEMA_VERSION = 3;
export const SCHEMA_VERSION_KEY = 'fabritor_schema_version';
export const LOG_PREFIX = `${APP_NAME}_log：`;

export const OBJECT_DEFAULT_CONFIG = {
  // controls
  borderColor: '#FF2222',
  borderScaleFactor: 2,
  cornerStrokeColor: '#2222',
  cornerColor: '#FF2222',
  cornerSize: 12,
  cornerStyle: 'circle',
  transparentCorners: false,
  padding: 0,
  centeredScaling: false,
  strokeUniform: true,
  paintFirst: 'stroke'
}

export const TEXTBOX_DEFAULT_CONFIG = {
  // styles
  fill: '#000000',
  fontWeight: 'normal',
  fontSize: 50,
  lineHeight: 1.30,
  textAlign: 'center',
  fontFamily: 'AlibabaPuHuiTi',
  // size
  width: 500,
  // 中文处理
  splitByGrapheme: true
}

export const FONT_PRESET_FAMILY_LIST = [
  { 
    label: <span style={{ fontFamily: 'Arial', fontSize: 16 }}>Arial</span>, 
    value: 'Arial' 
  },
  { 
    label: <span style={{ fontFamily: 'Helvetica', fontSize: 16 }}>Helvetica</span>, 
    value: 'Helvetica' 
  },
  { 
    label: <span style={{ fontFamily: 'Times New Roman', fontSize: 16 }}>Times New Roman</span>, 
    value: 'Times New Roman' 
  },
  { 
    label: <span style={{ fontFamily: 'Courier New', fontSize: 16 }}>Courier New</span>, 
    value: 'Courier New' 
  },
  { 
    label: <span style={{ fontFamily: 'Verdana', fontSize: 16 }}>Verdana</span>, 
    value: 'Verdana' 
  },
  { 
    label: <span style={{ fontFamily: 'Georgia', fontSize: 16 }}>Georgia</span>, 
    value: 'Georgia' 
  },
  { 
    label: <span style={{ fontFamily: 'Tahoma', fontSize: 16 }}>Tahoma</span>, 
    value: 'Tahoma' 
  },
  { 
    label: <span style={{ fontFamily: 'Arial Narrow', fontSize: 16 }}>Arial Narrow</span>, 
    value: 'Arial Narrow' 
  },
  { 
    label: <span style={{ fontFamily: 'Trebuchet MS', fontSize: 16 }}>Trebuchet MS</span>, 
    value: 'Trebuchet MS' 
  },
  { 
    label: <span style={{ fontFamily: 'Impact', fontSize: 16 }}>Impact</span>, 
    value: 'Impact' 
  },
  { 
    label: <span style={{ fontFamily: 'Book Antiqua', fontSize: 16 }}>Book Antiqua</span>, 
    value: 'Book Antiqua' 
  },
  { 
    label: <span style={{ fontFamily: 'Palatino', fontSize: 16 }}>Palatino</span>, 
    value: 'Palatino' 
  },
  { 
    label: <span style={{ fontFamily: 'Lucida Sans Unicode', fontSize: 16 }}>Lucida Sans Unicode</span>, 
    value: 'Lucida Sans Unicode' 
  }
]

export const SKETCH_ID = 'fabritor-sketch';

export const FABRITOR_CUSTOM_PROPS = [
  'id',
  'fabritor_desc',
  'selectable',
  'hasControls',
  'sub_type',
  'imageSource',
  'imageBorder',
  'oldArrowInfo'
];