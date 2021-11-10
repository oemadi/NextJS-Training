

import Layout from '../component/Layout/index.tsx'
import Table from 'react-bootstrap/Table'

export default function News(props) {
  const {dataUsers}=props;
    return (
      <div>
        <Layout pageTitle="News">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>

        {dataUsers.map(user=>{
          return(
          <tr>
            <td>1</td>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
          )
        })}

        </tbody>
        </Table>
        </Layout>
      </div>
       
    )
    }

export async function getStaticProps(){
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return{
    props:{
      dataUsers,
    },
  };
}

