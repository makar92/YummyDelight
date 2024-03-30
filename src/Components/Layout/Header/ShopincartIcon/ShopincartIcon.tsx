import React, { FC, useState } from 'react'
import styles from './ShopincartIcon.module.scss'
import { FaCartShopping } from "react-icons/fa6";
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

const ShopincartIcon: FC = () => {

  const counter = useTypedSelector(state => state.orderReducer.counter)
  const [isShowHelp, setIsShowHelp] = useState(false)

  const showHelp = () => {
    if (counter === 0) {
      setIsShowHelp(true)
      setTimeout(() => setIsShowHelp(false), 2000)
    }
  }

  return (
    <div className={styles.shopincart} onClick={showHelp}>
      <div className={styles.counter}>{counter}</div>
      <FaCartShopping className={styles.shopincartIcon} />
      {isShowHelp
        ? <div className={styles.help}>Shopincart is empty!</div>
        : <></>
      }
    </div>
  )
}

export default ShopincartIcon