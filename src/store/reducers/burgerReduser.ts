export const OPEN_BURGER = "OPEN_BURGER"
export const CLOSE_BURGER = "CLOSE_BURGER"
export const CHANGE_ISOPEN_BURGER = "CHANGE_BURGER"

interface Action { type: string, payload?: any }

interface BurgerState {
  isOpenBurger: boolean,
}

const initialState: BurgerState = {
  isOpenBurger: false
}

export const burgerReduser = (state = initialState, action: Action): BurgerState => {
  switch (action.type) {
    case OPEN_BURGER:
      return { ...state, isOpenBurger: true }
    case CLOSE_BURGER:
      return { ...state, isOpenBurger: false }
    case CHANGE_ISOPEN_BURGER:
      return { ...state, isOpenBurger: !state.isOpenBurger }
    default:
      return state
  }
}