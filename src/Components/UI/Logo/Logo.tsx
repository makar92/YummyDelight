import React, { FC, MouseEventHandler } from 'react'
import styles from './Logo.module.scss'

interface ILogo {
  className?: string,
  onClick?: MouseEventHandler,
}

const Logo: FC<ILogo> = ({...props}) => {
  return (
    <div className={styles.logo + " " + props.className} onClick={props.onClick}>
      <img src="./image/Logo.png" alt="logo" />
      <div className={styles.text}>apptrix</div>
    </div>
  )
}

export default Logo