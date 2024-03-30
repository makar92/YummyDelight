import React, { FC, MouseEventHandler } from 'react'
import styles from './BtnAdd.module.scss'

interface PropsBtnAdd {
  onClick?: MouseEventHandler,
  className?: string,
}

const BtnAdd: FC<PropsBtnAdd> = (props) => {
  return (
    <div className={styles.btnAdd + " " + props.className}
      onClick={props.onClick}
    ><div>+</div></div>
  )
}

export default BtnAdd