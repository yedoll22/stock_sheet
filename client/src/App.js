import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PATHNAME } from './static/constant'

import StockBySheet from './pages/StockBySheet'
import StockByStorage from './pages/StockByStorage'
import TableProvider from './store/TableProvider'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={PATHNAME.sheet} />} />
        <Route
          path={PATHNAME.sheet}
          element={
            <TableProvider>
              <StockBySheet />
            </TableProvider>
          }
        />
        <Route
          path={PATHNAME.storage}
          element={
            <TableProvider>
              <StockByStorage />
            </TableProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
