import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { ProductType } from '../../types/type'

import './Product.css'

const Product: FC<ProductType> = ({ id, name, price, description, url, deleted, added }) => {
  const dispatch = useDispatch()
  
  const addToShoppingCart = () => {
    dispatch({
      type: 'ADD_TO_SHOPING_CART',
      data: { id },
    })
  }

  const deleteProduct = () => {
    dispatch({
      type: 'DELETE_PRODUCT',
      data: { id },
    })
  }

  return (
    <div className="сontainer">
      <Link 
        className="flex" 
        to={{ pathname: "/product/" + id }} 
        state={{ id }}
      >
        <img className="img" src={url} alt="img" />
        <div className="name">{name}</div>
      </Link>
      <div className="price">{price} ₽</div>
        {!deleted && !added ? (
          <button onClick={addToShoppingCart} className="addToShoppingCart">Добавить корзину</button>
        ) : (
          !deleted && <span className="addingShoppingCart">Добавлено в корзину</span>
        )}
        {deleted && <button onClick={deleteProduct} className="deletedProduct">X</button>}
      </div>
  )
}

export default Product