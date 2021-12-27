import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { ProductType } from '../../types/type'

import './SeparateProduct.css'


const SeparateProduct: FC<ProductType> = ({ id, added, name, price, description, url }) => {
  const dispatch = useDispatch()
  
  const addToShoppingCart = () => {
    dispatch({
      type: 'ADD_TO_SHOPING_CART',
      data: { id },
    })
  }

  return (
    <>
      <div className="separateProduct">
        <img className="img" src={url} alt="img" />
        <div className="blockInfo">
          <h2 className="name">{name}</h2>
          <p className="price"><b>Цена:</b> {price} р</p>
          {!added ? (
            <button 
              onClick={addToShoppingCart} 
              className="addToShoppingCart"
            >
              Добавить корзину
            </button>
          ) : (
            <span className="addingShoppingCart">Добавлено в корзину</span>
          )}
        </div>
      </div>
      <h2>Описание</h2>
      {description ? description : (
        <p>
          Что внутри дивана знает не каждый покупатель. Мало кто интересуется внутренним 
          содержимым такой мебели, а зря. Именно начинка определяет комфорт, влияет на 
          эксплуатационные характеристики и срок службы изделия. Заглянем внутрь дивана и 
          постараемся максимально детально разобраться в его устройстве.
      </p>
      )}
    </>
  )
}

export default SeparateProduct