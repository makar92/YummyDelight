import React, { FC, useState } from 'react'
import styles from './Order.module.scss'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'
import PaymentMethodItem from './PaymentMethodItem/PaymentMethodItem'
import { addDoc, collection } from 'firebase/firestore'
import { firestore } from '../../..'
import { SET_ORDER } from '../../../store/reducers/orderReduser'
import { useNavigate } from 'react-router-dom'
import { SUCCESSFUL_ORDER_ROUTE } from '../../../routs'
import Container from '../../Global/Container/Container'
import Shopincard from './Shopincard/Shopincard'
import Loader from '../../Global/Loader/Loader'
import { useTypeDispatch } from '../../../hooks/useTypedDispatch'

const Order: FC = () => {

  const paymentMethods = [
    { title: "CASH", type: "text", text: "CASH", image: "", },
    { title: "VISA", type: "image", text: "", image: "./image/paymentMethod/visa.png", },
    { title: "MasterCard", type: "image", text: "", image: "./image/paymentMethod/mastercard.png", },
    { title: "PayPal", type: "image", text: "", image: "./image/paymentMethod/Paypal.png", },
  ]

  const navigate = useNavigate()

  const dispatch = useTypeDispatch()

  const email = useTypedSelector((state) => state.isLoginReducer.email)
  const shopingcardItems = useTypedSelector((state) => state.orderReducer.shopingcart)
  const shopingcardCount = useTypedSelector((state) => state.orderReducer.counter)

  const [total, setTotal] = useState(0)
  const [valueStreet, setValueStreet] = useState("")
  const [valueHouse, setValueHouse] = useState("")
  const [valueApartment, setValueApartment] = useState("")
  const [valuePhone, setValuePhone] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [isLoading, setIsLoaading] = useState(false)

  const submit = async (event: any) => {

    event.preventDefault()

    let orderN = (new Date).getTime()
    let month = new Date().toISOString().substr(5, 2)
    let day = Date().substr(8, 2)
    let year = new Date().getFullYear()
    let date = `${month}.${day}.${year}`
    let time = Date().substr(16, 8)

    try {
      setIsLoaading(true)
      
      const docRef = await addDoc(collection(firestore, "orders"), {
        orderNumber: orderN,
        orderDate: date,
        orderTime: time,
        email: email,
        phone: valuePhone,
        total: total,
        address: {street: valueStreet,house: valueHouse,appartment: valueApartment},
        dishes: shopingcardItems,
        paymentMethod: paymentMethod,
      })

      dispatch({
        type: SET_ORDER, payload: {
          address: {street: valueStreet, house: valueHouse, apartment: valueApartment},
          phone: valuePhone,
          paymentMethod: paymentMethod,
          orderNumber: orderN,
          orderDate: date,
          orderTime: time,
        }
      })

      setValueStreet("")
      setValueHouse("")
      setValueApartment("")
      setValuePhone("")
      setPaymentMethod("")
      setIsLoaading(false)

      console.log("Document written with ID: ", docRef.id);
      navigate(SUCCESSFUL_ORDER_ROUTE, { replace: false })
    } catch (e) {
      console.error("Error adding document: ", e);
      alert(`Error order! ${e}`)
    }
  }

  return (
    <Container>{isLoading
      ? <Loader color='color1' text='Wait! The order is creating!'/>
      : <div className={styles.order}>{shopingcardCount
        ? <>
          <Shopincard/>
          <form className={styles.address} onSubmit={submit}>
            <div className={styles.title}>Write the address:</div>
            <div className={styles.addressInputs}>
              <Input
                type="text"
                undertext="Phone:"
                placeholder="+7 777 777 77 77"
                required
                onChange={(e: any) => { setValuePhone(e.target.value) }}
                value={valuePhone}
              />
              <Input
                type="text"
                undertext="Street:"
                placeholder="lugovaya street"
                required
                onChange={(e: any) => { setValueStreet(e.target.value) }}
                value={valueStreet}
              />
              <Input
                type="text"
                undertext="House number:"
                placeholder="number"
                required
                onChange={(e: any) => { setValueHouse(e.target.value) }}
                value={valueHouse}
              />
              <Input
                type="text"
                undertext="Apartment number:"
                placeholder="number"
                required
                onChange={(e: any) => { setValueApartment(e.target.value) }}
                value={valueApartment}
              />
            </div>
            <div className={styles.paymentMethod}>
              <div className={styles.title}>Select a Payment Method:</div>
              <div className={styles.paymentMethodItems}>
                {paymentMethods.map((q) => (
                  <PaymentMethodItem
                    key={q.title}
                    title={q.title}
                    name="paymentMethod"
                    type={q.type}
                    text={q.text}
                    image={q.image}
                    onChange={() => { setPaymentMethod(q.title) }}
                    value={paymentMethod}
                    required="required"
                  />
                ))}
              </div>
            </div>
            <Button>Create order</Button>
          </form>
        </>
        : <div className={styles.title}>Корзина пуста!</div>
      }
      </div>
    }
    </Container>
  )
}

export default Order