import { Form, Input, Button, Checkbox,Avatar  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function tab1(){

return(
    <div>
    <div>
      <Avatar shape="square" size={128} icon={<UserOutlined />} />
    </div>
    <div>
    <Button type="primary" size={12}>Unggah</Button>
    </div>
    </div>
)
}