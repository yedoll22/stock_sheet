import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import StockByType from './pages/StockByType'
import StockByStorage from './pages/StockByStorage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="type" />} />
        <Route path="type" element={<StockByType />} />
        <Route path="storage" element={<StockByStorage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
