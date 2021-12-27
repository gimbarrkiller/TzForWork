import { MOCK_DATA } from '../../accets/mock/mockData'
import { Action } from '../actions'

type Product = {
  id: number
  name: string
  price: number
  url: string
}

type ActionProduct = {
  deleted: boolean
  added: boolean
}

type Item = Product & ActionProduct

const products = localStorage.getItem("products")
const initialState = products ? JSON.parse(products) : MOCK_DATA

const allProducts = (state: Item[] = initialState, action: Action<Product>) => {
  switch (action.type) {
    case 'ADD_TO_SHOPING_CART':
        return state.map(product =>
          (product.id === action.data.id)
            ? {...product, added: !product.added}
            : product
        )

      case 'DELETE_PRODUCT':
        return state.map(product =>
          (product.id === action.data.id)
            ? {...product, added: !product.added}
            : product
        )
        
    default:
      return state
  }
}

export default allProducts;