
export const IN_LOGIN = "IN_ADMIN"
export const OUT_LOGIN = "OUT_ADMIN"

interface Action {type: string, payload?: any}
interface IsLoginState { 
  isLogin: boolean, 
  email: undefined | string,
  image: undefined | string,
  name: undefined | string,
}

const initialState: IsLoginState = {
  isLogin: true,
  email: undefined,
  name: undefined,
  image: undefined,
}

export const isLoginReducer = (state = initialState, action: Action): IsLoginState => {
  switch (action.type) {
    case IN_LOGIN:
      return { 
        ...state, 
        isLogin: true, 
        email: action.payload.email,
        name: action.payload.name,
        image: action.payload.image,
      }
    case OUT_LOGIN:
      return { 
        ...state, 
        isLogin: false, 
        email: undefined, 
        image: undefined
      }
    default:
      return state
  } 
}