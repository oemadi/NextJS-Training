import { Row,Col,Form, Input, Button, Checkbox } from 'antd';

export default function AntdIsian12(){
const Demo = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
       


        <Row>
    <Col span={12}>
    <Form.Item
          label="nama"
          name="nama"
          rules={[
            {
              required: false,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="nama"
          name="nama"
          rules={[
            {
              required: false,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    </Col> 
    <Col span={12}><AntdIsian12/></Col> 
    </Row>



        </Form>
        )
}
return(
<><Demo/></>
)
}