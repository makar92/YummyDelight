
import { FC } from "react"
import Main from "./Components/Pages/Main/Main"
import Menu from "./Components/Pages/Menu/Menu"
import Order from "./Components/Pages/Order/Order"
import SuccessfulOrder from "./Components/Pages/SuccessfulOrder/SuccessfulOrder"

export const MAIN_ROUTE = '/main'
export const MENU_ROUTE = '/menu'
export const ORDER_ROUTE = '/order'
export const SUCCESSFUL_ORDER_ROUTE = '/successful_order'

interface routes {
  path: string,
  Component: FC<any>,
}

export const publicRoutes: Array<routes> = [
  { path: MAIN_ROUTE, Component: Main },
]

export const privateRoutes: Array<routes> = [
  { path: MAIN_ROUTE, Component: Main },
  { path: MENU_ROUTE, Component: Menu },
  { path: ORDER_ROUTE, Component: Order },
  { path: SUCCESSFUL_ORDER_ROUTE, Component: SuccessfulOrder },
]