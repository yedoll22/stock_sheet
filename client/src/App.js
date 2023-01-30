import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StockByType from './pages/StockByType'
import StockByStorage from './pages/StockByStorage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StockByType />} />
        <Route path="storage" element={<StockByStorage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
