import React, { FC } from 'react'
import styles from './Content.module.scss'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MAIN_ROUTE, privateRoutes, publicRoutes } from '../../../routs'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

interface IContent {
  className: string
}

const Content: FC<IContent> = ({...props}) => {

  const isLogin = useTypedSelector((state) => state.isLoginReducer.isLogin)

  return (
    <div className={styles.content + " " + props.className}>
        {isLogin
          ? (
            <Routes>
              {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path='*' element={<Navigate to={MAIN_ROUTE} replace />} />
            </Routes>
          )
          : (
            <Routes>
              {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
              <Route path='*' element={<Navigate to={MAIN_ROUTE} replace />} />
            </Routes>
          )
        }
    </div>
  )
}

export default Content