import { useState } from 'react'
import { useSelector } from 'react-redux'
import { map, toString } from 'lodash'

import Product from '../../Components/Product/Product'

import './AllProducts.css'
import { ProductType } from '../../types/type'

const AllProducts = () => {
  const [display, setDisplay] = useState(localStorage.getItem("display") || 'list')
  const { allProducts }: any = useSelector((state) => state)
  window.addEventListener("unload", (ev) => {
    ev.preventDefault()
    localStorage.setItem("display", toString(display))
  })
  
  return (
    <div className="allProductsContainer">
      <h1>Главная</h1>
      <div>
        <button
          onClick={() => setDisplay('tile')}
          className="btnFirst"
        >
          Плитка
        </button>
        <button onClick={() => setDisplay('list')}>Список</button>
      </div>
      <div className={display}>
        {map(allProducts, (item: ProductType) => {
          return (
            <Product
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              url={item.url}
              key={item.id}
              deleted={false}
              added={item.added}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AllProducts