import { NavLink } from 'react-router-dom'
import locations from '../datas/locations.json'

const Cart = () => {
  return (
    <div className='cart'>
      {locations.map((location) => (
        <div key={location.id} className='cart-Item'>
          <NavLink to={`/locations/${location.id}`}>
            <img src={location.cover} alt={location.title} />
            <h3>{location.title}</h3>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default Cart
