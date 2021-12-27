import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { get, find } from 'lodash'

import AllListProducts from '../../Pages/AllListProducts/AllListProducts'
import SeparateProduct from '../../Pages/SeparateProduct/SeparateProduct'

import './Main.css'

const gettingData = (array: any, item: string) => get(array, `${item}`)

const Main = () => {
  const { allProducts }: any = useSelector((state) => state)
  const { state } = useLocation()

  const id = gettingData(state, 'id')
  // я понимаю, что эти данные можно было преедать через стейт роута, 
  // а не сравнивать id с общим стейтом, но есть проблема перерендера
  const productFind = find(allProducts, (item: any) => item.id === id)
  const added = gettingData(productFind, 'added')
  const name = gettingData(productFind, 'name')
  const price = gettingData(productFind, 'price')
  const description = gettingData(productFind, 'description')
  const url = gettingData(productFind, 'url')

  return (
    <main className="main">
      <Routes>
        <Route path='/' element={<AllListProducts allProducts={allProducts} />}/>
        <Route path='/product/:number' element={
          <SeparateProduct 
            id={id} 
            added={added} 
            name={name} 
            price={price} 
            description={description} 
            url={url} />
        }/>
      </Routes>
    </main>
  )
}

export default Main
