import React, { FC } from 'react'
import styles from './Layout.module.scss'
import Header from './Header/Header'
import Content from './Content/Content'
import Footer from './Footer/Footer'

const Layout: FC = () => {

  return (
    <div className={styles.layout}>
      <Header />
      <Content className={styles.content}/>
      <Footer />
    </div>
  )
}

export default Layout