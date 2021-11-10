import { Tabs } from 'antd';
import AntdForm from '../antd/AntdForm'
import AntdLogin from '../antd/AntdLogin'
import AntdTable from '../antd/AntdTable'
import AntdIsian1 from '../antd/AntdIsian1'

export default function AntdTab(){
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="4" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
    <AntdForm/>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
    <AntdLogin/>
    </TabPane>
    <TabPane tab="Tab 3" key="3">
    <AntdTable/>
    </TabPane>
    <TabPane tab="Tab 4" key="4">
    <AntdIsian1/>
    </TabPane>

  </Tabs>
)
  return (
    
    <div><Demo/></div>

  )


}