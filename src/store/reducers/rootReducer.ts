import { combineReducers } from 'redux'

import allProducts from './allProducts'
import shopingCart from './shopingCart'

type RootReducer = {
  allProducts: any,
  shopingCart: any
}

const rootReducer = combineReducers<RootReducer>({
  allProducts,
  shopingCart,
})

export default rootReducer