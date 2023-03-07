import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PATHNAME } from './static/constant'

import StockBySheet from './pages/StockBySheet'
import StockByStorage from './pages/StockByStorage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PATHNAME.sheet} />} />
        <Route path={PATHNAME.sheet} element={<StockBySheet />} />
        <Route path={PATHNAME.storage} element={<StockByStorage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
