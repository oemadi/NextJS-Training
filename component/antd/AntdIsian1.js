import { Card,Row,Col,Tabs } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import AntdIsian11 from '../antd/AntdIsian11'
import AntdIsian12 from '../antd/AntdIsian12'

export default function AntdIsian1(){
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
return(
  <div className="site-card-border-less-wrapper">
    <Card title="Ubah Orang" bordered={false} style={{ width: 800 }}>
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Data Pribadi" key="1">
    <Row>
    <Col span={2}><AntdIsian11/></Col> 
    <Col span={22}><AntdIsian12/></Col> 
    </Row>

    </TabPane>
    <TabPane tab="Data Tambahan" key="2">
     <Row>
      <Col span={24}>col-24</Col>
    </Row>
    </TabPane>
   

  </Tabs>

  
 
    </Card>
  </div>
);
}