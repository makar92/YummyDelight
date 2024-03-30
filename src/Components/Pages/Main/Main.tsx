import React, { FC } from 'react'
import styles from './Main.module.scss'
import Discount from './Discount/Discount'
import Info from './Info/Info'
import MainBlock from './MainBlock/MainBlock'

const Main: FC = () => {

  return (
    <div className={styles.main}>
      <MainBlock/>
      <Info/>
      <Discount/>
    </div>
  )
}

export default Main