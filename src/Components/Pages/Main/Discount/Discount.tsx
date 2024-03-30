import React, { FC, useState } from 'react'
import styles from './Discount.module.scss'
import Container from '../../../Global/Container/Container'
import Loader from '../../../Global/Loader/Loader'

const Discount: FC = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribe, setIsSubscribe] = useState(false)

  const submit = (e: any) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubscribe(true)
    }, 2000)
  }

  return (
    <Container>
      <div className={styles.discount}>
        {isSubscribe
          ? <div className={styles.subscribed}>You are subscribed!</div>
          : <>
            {isLoading
              ? <Loader color='color2' />
              : <>
                <div className={styles.title}>GET 50%</div>
                <form className={styles.form} onSubmit={submit}>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder='Enter Your Email Address'
                    required
                  />
                  <button
                    className={styles.button}
                  >subscribe</button>
                </form>
                <div className={styles.image}>
                  <img src="./image/main/for_discountBlock.png" alt="dish" />
                </div>
              </>
            }
          </>
        }
      </div>
    </Container>
  )
}

export default Discount