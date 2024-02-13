import hebergements from '../datas/hebergements.json'
import Cart from './Cart'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='cart'>
        {hebergements.map((location) => (
          <Cart location={location} key={location.id} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
