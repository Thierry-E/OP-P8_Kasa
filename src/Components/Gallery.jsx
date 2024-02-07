import locations from '../datas/locations.json'
import Cart from './Cart'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='cart'>
        {locations.map((location) => (
          <Cart location={location} key={location.id} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
