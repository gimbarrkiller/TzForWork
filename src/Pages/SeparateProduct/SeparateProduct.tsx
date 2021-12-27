import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { get } from 'lodash'

import './SeparateProduct.css'

const SeparateProduct = () => {
  const dispatch = useDispatch()
  const { state } = useLocation()
  console.log(state)
  const id = get(state, 'id')
  const name = get(state, 'name')
  const price = get(state, 'price')
  const description = get(state, 'description')
  const url = get(state, 'url')
  const added = get(state, 'added')

  const addToShoppingCart = () => {
    dispatch({
      type: 'ADD_TO_SHOPING_CART',
      data: { id, name, description, price, url, added },
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