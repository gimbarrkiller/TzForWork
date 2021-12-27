import { MOCK_DATA } from '../../accets/mock/mockData'
import { Action } from '../actions'

type Product = {
  id: number
  name: string
  price: number
  description?: string
  url: string
}

type ActionProduct = {
  deleted: boolean
  added: boolean
}

type Item = Product & ActionProduct

const initialState: [] = []
  
const shopingCart = (state = initialState, action: Action<Product>) => {
  switch (action.type) {
    case 'ADD_TO_SHOPING_CART':
      return [...state,
        {
          id: action.data.id,
          name: action.data.name,
          price: action.data.price,
          url: action.data.url,
          description: action.data.description,
          added: true
        }
      ]

    case 'DELETE_PRODUCT':
      return state.filter(({ id }) => id !== action.data)

    default:
      return state
  }
}

export default shopingCart;