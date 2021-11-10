import React from 'react'
import {Nav,Item} from 'react-bootstrap'
import Tab1 from '../component/pengadaan/tab1'
import Tab2 from '../component/pengadaan/tab2'


export default function Pengadaan() {
    return (
        <div>
           <Nav defaultActiveKey="/" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/">Data Pribadi</Nav.Link>
               
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/">Data Tambahan</Nav.Link>
               
            </Nav.Item>
            </Nav>
        </div>
    )
}

