import { combineReducers } from "redux";
import { isLoginReducer } from "./isLoginReduser";
import { orderReducer } from "./orderReduser";
import { dishesReducer } from "./dishesReduser";
import { burgerReduser } from "./burgerReduser";

export const rootReducer = combineReducers({
  isLoginReducer,
  orderReducer,
  dishesReducer,
  burgerReduser
})

export type RootState = ReturnType<typeof rootReducer>
