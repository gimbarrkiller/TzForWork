import { useSelector } from 'react-redux'
import { map, isEmpty, filter, sum } from 'lodash'

import Product from '../../Components/Product/Product'

import './ShopingCart.css'
import { ProductType } from '../../types/type'

const ShopingCart = () => {
  const { allProducts }: any = useSelector(state => state)
  window.addEventListener("unload", (ev) => {  
    ev.preventDefault()
    localStorage.setItem("products", JSON.stringify(allProducts))
  })

  const itemsFromBasket = filter(allProducts, item => item.added === true)
  const totalAmount = sum(map(itemsFromBasket, item => item.price))
  
  return (
    <div className="list shopingCart">
      <h1>Корзина</h1>
      <div className="carts">
        {!isEmpty(itemsFromBasket) ? map(itemsFromBasket, (item: ProductType) => {
          return (
            <Product
              id={item.id}
              name={item.name}
              price={item.price}
              url={item.url}
              key={item.id}
              deleted={true}
              added={true}
            />
          )
        }) : <div>Корзина пуста</div>}
      </div>
      {!isEmpty(itemsFromBasket) && totalAmount !== 0 && <div>Общая сумма: {totalAmount}</div>}
    </div>
  )
}

export default ShopingCart