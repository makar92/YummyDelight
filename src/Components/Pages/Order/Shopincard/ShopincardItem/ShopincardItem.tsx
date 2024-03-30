import React, { FC, useEffect, useState } from 'react'
import styles from './ShopincardItem.module.scss'
import SelectQuantity from '../../../../UI/SelectQuantity/SelectQuantity'
import { ADD_TO_SHOPINGCARD, REMOVE_FROM_SHOPINGCARD } from '../../../../../store/reducers/orderReduser'
import { useTypeDispatch } from '../../../../../hooks/useTypedDispatch'

interface PropsShopincardItem {
  id: number,
  name?: string,
  price?: number | undefined,
  quantity?: number | undefined,
}

const ShopincardItem: FC<PropsShopincardItem> = (props) => {

  const dispatch = useTypeDispatch()
  
  const [total, setTotal] = useState(props.price)
  
  useEffect(() => {
    if (props.price !== undefined && props.quantity !== undefined) {
      setTotal( props.price * props.quantity)
    }
  }, [props.quantity])

  const addDish = () => {
    dispatch({
      type: ADD_TO_SHOPINGCARD, payload: {
        dish: {
          id: props.id,
          name: props.name,
          price: props.price,
          quantity: 1,
        }
      }
    })
  }

  const removeDish = () => {
    dispatch({
      type: REMOVE_FROM_SHOPINGCARD, payload: {
        dish: {
          id: props.id,
        }
      }
    })
  }

  return (
    <div className={styles.shopingcardItem}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.price}>${props.price}</div>
      <div className={styles.quantity}>
        <SelectQuantity 
          quantity={props.quantity}
          onClickMinus={removeDish}
          onClickPlus={addDish}
        />
      </div>
      <div className={styles.total}>${total}</div>
    </div>
  )
}

export default ShopincardItem