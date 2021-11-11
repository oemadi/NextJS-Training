import {useState,useEffect} from 'react'
import {Table} from "antd"

export default function tabledata() {
    const [loading,setLoading]= useState(false);
    const [dataSource,setDataSource]= useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data=> {
            setDataSource(data)
            console.log(data)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })        
    },[])

    const columns = [
    { 
          title:'ID',
          dataIndex:'id',
          key: 'id',
    },
    { 
          title:'Title',
          dataIndex:'title',
          key: 'title',
    },
    
    { 
          title:'Body',
          dataIndex:'body',
          key: 'body',
    },
    ];

    return (
        <div >
       <Table 
       loading={loading}
       dataSource={dataSource} 
       columns={columns} 

       />
            
        </div>
    )
}

