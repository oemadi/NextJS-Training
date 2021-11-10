import { Card,Row,Col,Tabs } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import Tab1 from '../pengadaan/tab1'
import Tab2 from '../pengadaan/tab2'

export default function TabPengadaan(){
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
return(
  <div className="site-card-border-less-wrapper">
    <Card title="Ubah Orang" bordered={false} style={{ width: 1000 }}>
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Data Pribadi" key="1">
    <Row>
    <Col span={4}><Tab1/></Col> 
    <Col span={20}><Tab2/></Col> 
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