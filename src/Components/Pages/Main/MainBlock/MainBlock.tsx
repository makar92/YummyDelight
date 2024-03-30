import React, { FC } from 'react'
import styles from './MainBlock.module.scss'
import Container from '../../../Global/Container/Container'

interface IDataMainblock {
  overText: string,
  title: string,
  text: string,
  img: string
}

const MainBlock: FC = () => {

  const data: IDataMainblock = {
    overText: "OVER 1000 USERS",
    title: "Enjoy Foods All Over The World",
    text: "EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus.",
    img: "./image/main/main.png"
  }

  let basicTitle = data.title.split(" ").slice(0, -1).join(" ")
  let overWord = data.title.split(" ").slice(-1)

  return (
    <Container>
      <div className={styles.mainBlock}>
        <div className={styles.content}>
          <div className={styles.overText}>
            <div className={styles.overText__line}></div>
            <div className={styles.overText__text}>{data.overText}</div>
          </div>
          <div className={styles.title}>
            {basicTitle} <span className={styles.colorWord}>{overWord}</span>
          </div>
          <div className={styles.text}>{data.text}</div>
        </div>
        <div className={styles.image}>
          <img src={data.img} alt="dish" />
        </div>
      </div>
    </Container>
  )
}

export default MainBlock