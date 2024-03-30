import React from 'react'
import styles from './Input.module.scss'

interface PropsInput {
  undertext?: string,
}
 
const Input = ({...props}) => {

  return (
    <div className={styles.inputBlock}>
      <div className={styles.undertext}>{props.undertext}</div>
      <input 
        className={styles.input}
        {...props}
      />
    </div>
  )
}

export default Input