import { Row,Col,Item,Form, Input, Button, Checkbox,Avatar  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
export default function tab1(){

return(
    <div>
     <Row   style={{width: '100%', justifyContent: 'center'}}>
        <Col >
        <Form.Item>
        <Avatar shape="square" size={128} icon={<UserOutlined />} />
        </Form.Item>
        
        <Form.Item>
        <Button type="primary"   style={{width: '100%', justifyContent: 'right'}} size={12}>Unggah</Button>
        </Form.Item>
        </Col> 
 
    </Row>
    </div>
)
}