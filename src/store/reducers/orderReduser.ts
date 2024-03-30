
export const ADD_TO_SHOPINGCARD = "ADD_TO_SHOPINGCARD"
export const REMOVE_FROM_SHOPINGCARD = "REMOVE FROM_SHOPINGCARD"
export const CLEAR_ORDER = "CLEAR_ORDER"
export const SET_ORDER = "SET_ORDER"

interface Action { type: string, payload?: any}

export interface IShopingCard {
  id?: string,
  name?: string,
  price?: number,
  quantity?: number
}

interface IOrderState {
  shopingcart: any,
  counter: number,
  address: {
    street: string | undefined,
    house: string |undefined,
    apartment: string |undefined,
  },
  phone: string | undefined,
  paymentMethod: string | undefined,
  orderNumber: number | undefined,
  orderDate: string | undefined,
  orderTime: string | undefined,
}

const initialState:IOrderState = {
  shopingcart: [],
  counter: 0,
  address: {
    street: undefined,
    house: undefined,
    apartment: undefined,
  },
  phone: undefined,
  paymentMethod: undefined,
  orderNumber: undefined,
  orderDate: undefined,
  orderTime: undefined,
}

export const orderReducer = (state = initialState, action: Action): IOrderState => {
  switch (action.type) {

    case ADD_TO_SHOPINGCARD: {

      let index = state.shopingcart.findIndex((element: any, index: any, array: any) => {
        if (element !== undefined) {
          return element.id === action.payload.dish.id
        }
      })

      const dish = state.shopingcart.some(function (e: any) {
        return e.id === action.payload.dish.id;
      });

      if (dish) {
        state.shopingcart[index].quantity++
      } else {
        state.shopingcart.push(action.payload.dish)
      }

      let newShopingcart = state.shopingcart.slice()
      return { ...state, shopingcart: newShopingcart, counter: state.counter + 1}
    }

    case REMOVE_FROM_SHOPINGCARD: {

      let index = state.shopingcart.findIndex((element: any, index: any, array: any) => {
        if (element !== undefined) {
          return element.id === action.payload.dish.id
        }
      })

      if (state.shopingcart[index].quantity === 1) {
        delete state.shopingcart[index]
      } else {
        state.shopingcart[index].quantity -= 1
      }

      let newShopingcart = state.shopingcart.slice()
      return { ...state, shopingcart: newShopingcart, counter: state.counter - 1 }
    }

    case CLEAR_ORDER: {
      return { ...state, 
        shopingcart: [], 
        counter: 0,
        address: {
          street: undefined,
          house: undefined,
          apartment: undefined,
        },
        phone: undefined,
        paymentMethod: undefined,
        orderNumber: undefined,
        orderDate: undefined,
        orderTime: undefined,
      }
    }

    case SET_ORDER: {
      return {
        ...state, 
        address: {
          street: action.payload.address.street,
          house: action.payload.address.house,
          apartment: action.payload.address.apartment,
        },
        phone: action.payload.phone,
        paymentMethod: action.payload.paymentMethod,
        orderNumber: action.payload.orderNumber,
        orderDate: action.payload.orderDate,
        orderTime: action.payload.orderTime,
      }
    }

    default:
      return state
  }
}