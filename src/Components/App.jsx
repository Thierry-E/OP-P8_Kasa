import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from '../components/Header'
import About from '../pages/About'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Locations from '../pages/Locations'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Locations/:id' element={<Locations />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
