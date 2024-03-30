import React, { FC, useEffect, useState } from 'react'
import styles from './Dish.module.scss'
import { ADD_TO_SHOPINGCARD, REMOVE_FROM_SHOPINGCARD } from '../../../../store/reducers/orderReduser';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import BtnAdd from '../../../UI/BtnAdd/BtnAdd';
import SelectQuantity from '../../../UI/SelectQuantity/SelectQuantity';
import { useTypeDispatch } from '../../../../hooks/useTypedDispatch';

interface IDish {
  image?: string,
  name?: string,
  description?: string,
  weigth?: number,
  price?: number,
  dish?: any,
}

const Dish: FC<IDish> = ({ ...props }) => {

  const dispatch = useTypeDispatch()

  const isLogin = useTypedSelector((state) => state.isLoginReducer.isLogin)
  const shopingcard = useTypedSelector((state) => state.orderReducer.shopingcart)

  const [dishInShopingcard, setDishInShopingcard]: any = useState(undefined)
  const [isBtnAdd, setisBtnAdd] = useState(true)
  
  const dish: IDish = props.dish.data()

  const changeQuantity = () => {

    setDishInShopingcard(shopingcard.find((element: any, index: number, array: []) => {
      if (element !== undefined) {
        return element.name === dish.name
      } else {
      }
    }))

    if (dishInShopingcard !== undefined) {
      if (dishInShopingcard.quantity > 0) {
        setisBtnAdd(false)
      } else {
        setisBtnAdd(true)
      }
    }
  }

  useEffect(() => {
    changeQuantity()
  }, [dishInShopingcard])

  const addDish = () => {
    dispatch({
      type: ADD_TO_SHOPINGCARD, payload: {
        dish: {
          id: props.dish.id,
          name: dish.name,
          price: dish.price,
          quantity: 1,
        }
      }
    })
    changeQuantity()
  }

  const removeDish = () => {
    if (dishInShopingcard.quantity > 0) {
      dispatch({
        type: REMOVE_FROM_SHOPINGCARD, payload: {
          dish: {
            id: props.dish.id,
          }
        }
      })
      changeQuantity()
    }
  }

  return (
    <div className={styles.dish}>
      <div className={styles.image}>
        <img src={dish.image} alt="dish" />
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{dish.name}</div>
        <div className={styles.description}>{dish.description}</div>
        <div className={styles.weight}>{dish.weigth} g.</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>${dish.price}</div>{isBtnAdd || dishInShopingcard === undefined
          ? <BtnAdd onClick={addDish} />
          : <SelectQuantity
              onClickMinus={removeDish}
              onClickPlus={addDish}
              quantity={dishInShopingcard.quantity}
            />
        }
      </div>
    </div>
  )
}

export default Dish