import { Provider } from 'react-redux'
import store from './store'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import SideBar from './Pages/ShopingCart/ShopingCart'

import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="mainContainer">
        <SideBar />
        <Main />
      </div>
    </Provider>
  )
}

export default App
