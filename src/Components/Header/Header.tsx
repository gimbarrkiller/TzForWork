import { Link } from 'react-router-dom'

import logo from '../../logo.svg'

import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo"/>
      <ul className="nav">
        <li><Link to={`/`}>Главная</Link></li>
      </ul>
    </div>
  )
}

export default Header