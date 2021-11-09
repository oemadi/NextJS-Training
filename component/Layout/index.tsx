import { ReactNode } from 'react'
import Menu from '../menu'
import Head from '../head'
import Foot from '../Foot'

import styles from '/styles/Home.module.css'

interface LayoutProps{
    children: ReactNode;

}
export default function Layout(props: LayoutProps) {
    const {children}=props;

    return (
      <div className={styles.container}>
        <Head/>
        <Menu/>
        <div className={styles.content}> {children}</div>
        <Foot/>
     </div>
       
    );
    }

