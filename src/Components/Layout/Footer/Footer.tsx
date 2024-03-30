import React, { FC } from 'react'
import styles from './Footer.module.scss'
import Logo from '../../UI/Logo/Logo'
import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE, MENU_ROUTE } from '../../../routs'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Container from '../../Global/Container/Container'

const Footer: FC = () => {

  const isLogin = useTypedSelector((state) => state.isLoginReducer.isLogin)

  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <NavLink to={MAIN_ROUTE}><Logo className={styles.logo} /></NavLink>
        {isLogin
          ? <ul className={styles.nuv}>
            <li><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
            <li><NavLink to={MENU_ROUTE}>Menu</NavLink></li>
          </ul>
          : <ul className={styles.nuv}>
            <li><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
          </ul>
        }
        <div className={styles.text}>© 2023 EATLY All Rights Reserved.</div>
        <div className={styles.socials}>
          <a href="#"><FaInstagram className={styles.social} /></a>
          <a href="#"><FaLinkedinIn className={styles.social} /></a>
          <a href="#"><FaFacebookF className={styles.social} /></a>
          <a href="#"><FaTwitter className={styles.social} /></a>
        </div>
        <div className={styles.line}></div>
      </Container>
    </div>
  )
}

export default Footer