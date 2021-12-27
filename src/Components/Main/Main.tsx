import { Routes, Route } from 'react-router-dom'

import AllProducts from '../../Pages/AllProducts/AllProducts'
import SeparateProduct from '../../Pages/SeparateProduct/SeparateProduct'

import './Main.css'

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path='/' element={<AllProducts />}/>
        <Route path='/product/:number' element={<SeparateProduct />}/>
      </Routes>
    </main>
  )
}

export default Main
