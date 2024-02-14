import { useState } from 'react'
import propTypes from 'prop-types'

const Dropdown = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='listContent'>
      <div className='list' onClick={toggleDropdown}>
        <h3>{title}</h3>
        <span className={`rafter ${isOpen ? 'rafterActive' : ''}`}>
          &#x2039;
        </span>
      </div>
      {isOpen && <p className='listActive'>{text}</p>}
    </div>
  )
}

// Définition des types de props
Dropdown.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
}.isRequired

export default Dropdown
