import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from '../Pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
