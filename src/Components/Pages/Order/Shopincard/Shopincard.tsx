import React, { FC, useEffect, useState } from 'react'
import styles from './Shopincard.module.scss'
import ShopincardItem from './ShopincardItem/ShopincardItem'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

const Shopincard: FC = () => {

  const [total, setTotal] = useState(0)

  const shopingcardItems = useTypedSelector((state) => state.orderReducer.shopingcart)
  const counterShopincart = useTypedSelector((state) => state.orderReducer.counter)

  useEffect(() => {
    let total = 0
    shopingcardItems.forEach((element: any) => {
      total = total + element.price * element.quantity
    });
    setTotal(total)
  }, [counterShopincart])

  return (
    <div className={styles.shopingcard}>
      <div className={styles.shopingcardHeader}>
        <div>Name</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
      </div>
      <div className={styles.shopingcardItems}>
        {shopingcardItems.map((q: any) => (
          <ShopincardItem
            key={q.name}
            id={q.id}
            name={q.name}
            price={q.price}
            quantity={q.quantity}
          />
        ))}
      </div>
      <div className={styles.total}>Total: ${total}</div>
    </div>
  )
}

export default Shopincard