import { Slider } from 'antd';
import './index.scss';

const COLOR_FILTER_LIST = [
  {
    label: 'None',
    value: 'none',
    src: 'https://cdn.pixabay.com/photo/2017/02/15/13/18/girl-2068638_1280.jpg'
  },
  {
    label: 'Retro',
    value: 'Sepia',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/复古.png'
  },
  {
    label: 'Film',
    value: 'Kodachrome',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/胶片.png'
  },
  {
    label: 'Old Photo',
    value: 'Vintage',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/老照片.png'
  },
  {
    label: 'Polaroid',
    value: 'Polaroid',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/宝丽来.png'
  },
  {
    label: 'Blur',
    value: 'Blur',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/模糊.png'
  },
  {
    label: 'Emboss',
    value: 'Emboss',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/浮雕.png'
  },
  {
    label: 'Pixelate',
    value: 'Pixelate',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/像素.png'
  },
  {
    label: 'Grayscale',
    value: 'Grayscale',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/黑白.png'
  },
  {
    label: 'Hue Rotation',
    value: 'HueRotation',
    src: 'https://raw.githubusercontent.com/sleepy-zone/fabritor-assets/main/images/调色.png'
  }
];

export default function RadioImageGroup (props) {
  const { value, onChange } = props;

  const handleChange = (v, key) => {
    onChange?.({
      ...value,
      [key]: v
    });
  }

  return (
    <div className="fabritor-radio-image-group">
      {
        COLOR_FILTER_LIST.map(option => (
          <div
            key={option.value} // Add key prop
            className="fabritor-radio-image-group-item"
            onClick={() => { handleChange(option.value, 'type') }}
          >
            <div
              className="fabritor-radio-image-group-img"
              style={{ borderColor: value?.type === option.value ? '#ff2222' : '#eeeeee' }}
            >
              <img src={option.src} />
            </div>
            <span>{option.label}</span>
            {
              option.value === 'Blur' && value?.type === 'Blur' ?
              <Slider
                min={0} 
                max={1}
                step={0.01}
                value={value?.param == undefined ? 0.2 : value?.param}
                onChange={(v) => { handleChange(v, 'param') }} 
              /> : null
            }
            {
              option.value === 'Pixelate' && value?.type === 'Pixelate' ?
              <Slider
                min={2} 
                max={20}
                step={0.01}
                value={value?.param == undefined ? 4 : value?.param}
                onChange={(v) => { handleChange(v, 'param') }} 
              /> : null
            }
            {
              option.value === 'HueRotation' && value?.type === 'HueRotation' ?
              <Slider
                min={-2} 
                max={2}
                step={0.002}
                value={value?.param == undefined ? 0 : value?.param}
                onChange={(v) => { handleChange(v, 'param') }} 
              /> : null
            }
          </div>
        ))
      }
    </div>
  )
}