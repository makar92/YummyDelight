import React, { FC, MouseEventHandler } from 'react'
import styles from './Button.module.scss'

interface PropsButton {
  children: string,
  onClick?: MouseEventHandler,
  type?: string,
  className?: string,
}

const Button: FC<PropsButton> = ( { children, ...props }) => {
  return (
    <button
      className={styles.button + " " + props.className}
      onClick={props.onClick}
    >{children}</button>
  )
}

export default Button