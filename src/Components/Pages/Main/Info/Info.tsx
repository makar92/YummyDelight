import React, { FC } from 'react'
import styles from './Info.module.scss'
import Container from '../../../Global/Container/Container'

interface IInfoItem {
  title: string,
  text: string
}

const Info: FC = () => {

  const infoItems: IInfoItem[] = [
    { title: "10K+", text: "Satisfied Costumers All Great Over The World" },
    { title: "4M", text: "Healthy Dishes Sold Including Milk Shakes Smooth" },
    { title: "99.99%", text: "Reliable Customer Support We Provide Great Experiences" },
  ]

  return (
    <div className={styles.info}>
      <Container className={styles.container}>
        {infoItems.map((item: IInfoItem) => (
          <div key={item.title} className={styles.item}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.text}>{item.text}</div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Info