export const SET_DISHES = "SET_DISHES"

interface Action {type: string, payload?: any}
interface DishesState { 
  dishes: any,
}

const initialState: DishesState = {
  dishes: []
}

export const dishesReducer = (state = initialState, action: Action): DishesState => {
  switch (action.type) {
    case SET_DISHES:
      return { ...state, dishes: action.payload.dishes}
    default:
      return state
  } 
}