import React, { FC, ReactNode } from 'react'
import styles from './Container.module.scss'

interface IContainer {
  children?: ReactNode,
  className?: string,
}

const Container:FC<IContainer> = ({children, ...props}) => {
  return (
    <div className={styles.container + " " + props.className}>{children}</div>
  )
}

export default Container