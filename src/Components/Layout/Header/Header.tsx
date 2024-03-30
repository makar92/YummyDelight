import React, { FC } from 'react'
import styles from './Header.module.scss'
import Button from '../../UI/Button/Button'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { IN_LOGIN, OUT_LOGIN } from '../../../store/reducers/isLoginReduser'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../..'
import { NavLink } from 'react-router-dom'
import ShopincartIcon from './ShopincartIcon/ShopincartIcon'
import { MAIN_ROUTE, MENU_ROUTE, ORDER_ROUTE } from '../../../routs'
import Logo from '../../UI/Logo/Logo'
import Container from '../../Global/Container/Container'
import { Spin as Hamburger } from 'hamburger-react'
import { CHANGE_ISOPEN_BURGER, CLOSE_BURGER} from '../../../store/reducers/burgerReduser'
import { useTypeDispatch } from '../../../hooks/useTypedDispatch'

const Header: FC = () => {

  const dispatch = useTypeDispatch()
  
  const isLogin = useTypedSelector((state) => state.isLoginReducer.isLogin)
  const counter = useTypedSelector(state => state.orderReducer.counter)
  const isOpenBurger = useTypedSelector((state) => state.burgerReduser.isOpenBurger)

  const closeBurger = () => dispatch({type: CLOSE_BURGER})
  const changeIsOpenBurger = () => dispatch({type: CHANGE_ISOPEN_BURGER})

  const inLogin = async () => {
    closeBurger()
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth, provider)
    dispatch({
      type: IN_LOGIN,
      payload: { email: user.user.email, image: user.user.photoURL, name: user.user.displayName,}
    })
  }

  const outLogin = () => {
    closeBurger()
    auth.signOut()
    dispatch({ type: OUT_LOGIN })
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <NavLink to={MAIN_ROUTE}><Logo onClick={closeBurger}/></NavLink>
          {isLogin
            ? <ul className={styles.nuv}>
              <li><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
              <li><NavLink to={MENU_ROUTE}>Menu</NavLink></li>
            </ul>
            : <ul className={styles.nuv}>
              <li><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
            </ul>
          }
          {isLogin
            ? <div className={styles.loginBlock}>
              {counter === 0
                ? <ShopincartIcon />
                : <NavLink to={ORDER_ROUTE}><ShopincartIcon /></NavLink>
              }
              <Button className={styles.button} onClick={outLogin}>Out</Button>
              <div className={styles.burger}>
                <Hamburger toggled={isOpenBurger} toggle={changeIsOpenBurger} color="#6C5FBC" size={40}/>
              </div>
            </div>
            : <div className={styles.loginBlock}>
              <Button className={styles.button} onClick={inLogin}>Login whith Google</Button>
              <div className={styles.burger}>
                <Hamburger toggled={isOpenBurger} toggle={changeIsOpenBurger} color="#6C5FBC" size={40}/>
              </div>
            </div>
          }
        </div>
        <div className={styles.borderBottom}></div>
      </Container>
      <div className={ isOpenBurger ? styles.burgerMenu : styles.burgerMenu + " " + styles.dn}>
        {isLogin
          ? <ul className={styles.burgerMenu__list}>
            <li onClick={closeBurger}><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
            <li onClick={closeBurger}><NavLink to={MENU_ROUTE}>Menu</NavLink></li>
            <li onClick={outLogin}>Out</li>
          </ul>
          : <ul className={styles.burgerMenu__list}>
            <li onClick={closeBurger}><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
            <li onClick={inLogin}>Login whith Google</li>
          </ul>
        }
      </div>
    </header>
  )
}

export default Header