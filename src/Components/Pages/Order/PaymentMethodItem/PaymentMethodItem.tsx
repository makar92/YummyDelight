import React, { FC, useEffect, useState } from 'react'
import styles from './PaymentMethodItem.module.scss'

interface PropsPaymentMethodItem {
  name: string,
  type: string,
  image: string,
  text: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  value: string,
  title: string,
  required: any
}

const PaymentMethodItem: FC<PropsPaymentMethodItem> = ({ ...props }) => {

  const [isChecked, setIschecked] = useState(false)

  useEffect(() => {
    if (props.value === props.title) {
      setIschecked(true)
    } else {
      setIschecked(false)
    }
  }, [props.value])

  return (
    <label>
      <div className={styles.PaymentMethodItem}>
        {isChecked
          ?<div className={styles.outline}></div>
          :<></>
        }
        {props.type === "image"
          ? <div className={styles.logo}>
            <img src={props.image} alt="logo" />
          </div>
          : <div className={styles.text}>{props.text}</div>
        }
      </div>
      <input
        {...props}
        type="radio"
        style={{ display: "none" }}
      />
    </label>
  )
}

export default PaymentMethodItem