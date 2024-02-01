import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Logo Agence Kasa' />
      <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A propos</Link>
      </nav>
    </header>
  )
}

export default Header
