import { Divider } from 'antd';

export default function Title(props) {
  const { children } = props;
  return (
    <Divider>{children}</Divider>
  )
}