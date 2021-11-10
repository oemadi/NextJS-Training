import { Row,Col,Form, Input, Select , Checkbox } from 'antd';

export default function tab2(){
  const { TextArea } = Input;
  const onChange = e => {
    console.log('Change:', e.target.value);
  };

  const { Option } = Select;

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
          label="Nama"
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
        </Row>
        <Row>
        <Col span={12}>
        <Form.Item
          label="Gelar Depan"
          name="gelard"
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
        <Col span={12}> 
        <Form.Item
          label="Gelar Belakang"
          name="belarb"
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
 
    </Row>
    <Row>
    
        <Col span={8}>
        <Form.Item
          label="Kelamin"
          name="kelamin"
          rules={[
            {
              required: false,
              message: 'Please input your Name!',
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 150 }}
            placeholder=""
          >
            <Option value="1">Laki-laki</Option>
            <Option value="2">Perempuan</Option>
          </Select>

        </Form.Item>
        </Col> 
        <Col span={8}> 
        <Form.Item
          label="Agama"
          name="agama"
        >
           <Select
            showSearch
            style={{ width: 150 }}
            placeholder=""
          >
            <Option value="1">Islam</Option>
            <Option value="2">Kristen Katolik</Option>
            <Option value="3">Kristen Protestan</Option>
            <Option value="4">Hindu</Option>
            <Option value="5">Budha</Option>
            <Option value="6">Konghucu</Option>
          </Select>
        </Form.Item>
    </Col> 
    <Col span={8}> 
        <Form.Item
          label="Email"
          name="email"
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
    
    </Row>
    <Row>
        <Col span={12}>
        <Form.Item
          label="Jenis ID Penduduk"
          name="jenisId"
        >
        <Select
            showSearch
            style={{ width: 150 }}
            placeholder=""
          >
            <Option value="1">KTP</Option>
            <Option value="2">SIM</Option>
          </Select>
        </Form.Item>
        </Col> 
        <Col span={12}>
        <Form.Item
          label="ID Penduduk"
          name="NIK"
        >
          <Input />
        </Form.Item>
        </Col> 
 
    </Row>
    <Row>
        <Col span={12}>
        <Form.Item
          label="Alamat"
          name="alamat"
        >
      
         <TextArea showCount maxLength={100} onChange={onChange} />

        </Form.Item>
        </Col> 
        
 
    </Row>
    <Row>
        <Col span={12}>
        <Form.Item
          label="No.Telp"
          name="telp"
        >
        <Input />
        </Form.Item>
        </Col> 
        
 
    </Row>
    <Row>
        <Col span={12}>
        <Form.Item
          label="Status"
          name="status"
        >
        <Input />
        </Form.Item>
        </Col> 
        
 
    </Row>
        </Form>
        )
}
return(
<><Demo/></>
)
}