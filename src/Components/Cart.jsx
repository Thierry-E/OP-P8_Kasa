import locations from '../datas/locations.json'

const Cart = () => {
  return (
    <div className='cart'>
      {locations.map((location) => (
        <div key={location.id} className='cart-Item'>
          <img src={location.cover} alt={location.title} />
          <h3>{location.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Cart
