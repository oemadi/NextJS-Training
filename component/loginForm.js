import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Input, Button, Card } from 'antd';
import {useRouter} from 'next/router'

export default function loginForm({ Login, error }) {
  // const [details, setDetails] = useState({ email: "", password: "" });


  // const adminUser = {
  //   username: 'admin',
  //   password: 'admin123',
  // };


  // const submitHandler = e => {
  //   e.preventDefault()
  //   Login(details)
  //   if (details.email == adminUser.email && details.password == adminUser.password) {
  //     console.log("Logged In");

  //   } else {
  //     console.log("Details do not match!");
  // //   }
  // }
  const history = useRouter()
  useEffect(() => {
    if(localStorage.getItem('user-info')){
     //   history.push('/');
    }
},[])
async function login(){
 let item = 'id=2'
 let result = await fetch('https://jsonplaceholder.typicode.com/users?id=2',{
  method: 'GET',
  redirect: 'follow'
 });
 result = await result.json();
 localStorage.setItem("user-info",JSON.stringify(result))
 history.push("/");
}
  const onFinish = (values) => {
    // console.log('Success:', values);
    // console.log("Logged In");
  //   history.push("/");
    // if(localStorage.getItem('user-info')){
 
       
      console.log('Success:',localStorage.getItem("user-info"))
  //      history.push('/');
  // }
  //   if (values.username == adminUser.username && values.password == adminUser.password) {
  //     console.log("Logged In");

  //   } else {
  //     console.log("Details do not match!");
  //  }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    console.log("Details do not match!");

  };

  return (
    <div className="site-card-border-less-wrapper">
    <Card title="Login App" style={{ width: 300,background:'#',justifyContent:'center',justifyItem:'center'}}>
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
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </Card>
        </div>
    
  )
}


