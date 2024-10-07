import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import About from '../Pages/About'
import Error from '../Pages/Error'
import Home from '../Pages/Home'
import Locations from '../Pages/Locations'

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
