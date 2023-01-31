import React from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'

function StockByStorage() {
  return (
    <>
      <Tab />
      <div className="mb-3">
        <Dropdown />
      </div>
      <Table />
    </>
  )
}

export default StockByStorage
