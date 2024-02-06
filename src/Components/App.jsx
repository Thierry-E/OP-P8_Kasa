import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../Pages/Home'
import Footer from './Footer'
import Error from '../pages/Error'
import About from '../pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<Error />} />
          {/*Route générique pour les URL non valides*/}
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
