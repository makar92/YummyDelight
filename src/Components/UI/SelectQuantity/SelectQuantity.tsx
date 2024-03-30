import React, { FC, MouseEventHandler } from 'react'
import styles from './SelectQuantity.module.scss'

interface PropsSelectedQuantity {
  onClickMinus: MouseEventHandler,
  onClickPlus: MouseEventHandler,
  quantity?: number,
}

const SelectQuantity: FC<PropsSelectedQuantity> = (props) => {

  return (
    <div className={styles.selectQuantity}>
      <div
        className={styles.arrow}
        onClick={props.onClickMinus}
      >-</div>
      <div className={styles.quantity}>{props.quantity}</div>
      <div
        className={styles.arrow}
        onClick={props.onClickPlus}
      >+</div>
    </div>
  )
}

export default SelectQuantity