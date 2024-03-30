import React, { FC, useEffect, useState } from 'react'
import styles from './SuccessfulOrder.module.scss'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { CLEAR_ORDER } from '../../../store/reducers/orderReduser'
import { useTypeDispatch } from '../../../hooks/useTypedDispatch'

const SuccessfulOrder: FC = () => {

  const dispatch = useTypeDispatch()

  const oNumber = useTypedSelector(state => state.orderReducer.orderNumber)
  const oDate = useTypedSelector(state => state.orderReducer.orderDate)
  const oTime = useTypedSelector(state => state.orderReducer.orderTime)
  
  const [orderNumber, setOrderNumber]: any = useState(undefined)
  const [orderDate, setOrderDate]: any = useState(undefined)
  const [orderTime, setOrderTime]: any =useState(undefined)

  useEffect(() => {
    setOrderNumber(oNumber)
    setOrderDate(oDate)
    setOrderTime(oTime)
    dispatch({type: CLEAR_ORDER})
  }, [])

  return (
    <div className={styles.successfulOrder}>
      <div className={styles.title}>Order created successfully!</div>
      <div className={styles.orderInfo}>
        <div className={styles.orderInfoItem}><span>Order number: </span>{orderNumber}</div>
        <div className={styles.orderInfoItem}><span>Order Date: </span>{orderDate}</div>
        <div className={styles.orderInfoItem}><span>Order Time: </span>{orderTime}</div>
      </div>
      <div className={styles.bonAppetit}>Bon appetit!</div>
    </div>
  )
}

export default SuccessfulOrder