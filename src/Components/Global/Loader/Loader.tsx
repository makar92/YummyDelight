import React, { FC } from 'react'
import styles from './Loader.module.scss'

interface ILoader {
  text?: string,
  color: "color1" | "color2"
}

const Loader: FC<ILoader> = (props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.title}>{props.text}</div>
      <span className={props.color === "color1"
      ? styles.spiner + " " + styles.spiner_color1
      : styles.spiner + " " + styles.spiner_color2
        
        } ></span>
    </div>
  )
}

export default Loader