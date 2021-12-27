import { combineReducers } from 'redux'

import allProducts from './allProducts'

type RootReducer = {
  allProducts: any,
}

const rootReducer = combineReducers<RootReducer>({
  allProducts,
})

export default rootReducer