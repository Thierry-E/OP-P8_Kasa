import services from '../datas/services.json'
import { useState } from 'react'

const DropdownList = () => {
  // Variable d'état qui permet de suivre l'état de chaque éléments de la liste, -1 représente l'état initial où aucun élément n'est ouvert
  const [isOpen, setIsOpen] = useState(-1)

  // Fonction toggle qui permet d'inverser l'état des éléments, Si l'élément est déjà ouvert, fermez-le, sinon ouvrez-le.
  const dropClick = (index) => {
    setIsOpen(index === isOpen ? -1 : index)
  }

  return (
    <div className='listContainer'>
      {services.map((service, index) => (
        <div key={service.id} className='listContent'>
          <div className='list'>
            <h3 key={service.id}>{service.title}</h3>
            <span
              className={`rafter ${index === isOpen ? 'rafterActive' : null}`}
              onClick={() => dropClick(index)}
            >
              &#x2039;
            </span>
          </div>
          <p
            key={service.id}
            className={index === isOpen ? 'listActive' : null}
          >
            {service.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default DropdownList
