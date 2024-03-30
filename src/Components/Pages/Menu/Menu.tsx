import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'
import Dish from './Dish/Dish'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../../..'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { SET_DISHES } from '../../../store/reducers/dishesReduser'
import Loader from '../../Global/Loader/Loader'
import Container from '../../Global/Container/Container'
import { useTypeDispatch } from '../../../hooks/useTypedDispatch'

const Menu = () => {

  const dispatch = useTypeDispatch()
  
  const dishes = useTypedSelector((state) => state.dishesReducer.dishes)

  const [isloading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    const newDishes: any = []
    const querySnapshot = await getDocs(collection(firestore, 'dishes'));
    querySnapshot.forEach((doc) => {
      newDishes.push(doc)
    })
    dispatch({ type: SET_DISHES, payload: { dishes: newDishes } })
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      {isloading
        ? <Loader text='Wait! Loading!' color='color1'/>
        : <div className={styles.menu}>
          {dishes.map((q: any) => <Dish key={q.id} dish={q} />)}
        </div>
      }
    </Container>
  )
}

export default Menu