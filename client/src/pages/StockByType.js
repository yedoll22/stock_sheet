import { useRef, useEffect, useState } from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'

function StockByType() {
  const outsideRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  function handleClickOutside(event) {
    if (outsideRef.current && !outsideRef.current.contains(event.target)) {
      console.log(
        outsideRef.current && !outsideRef.current.contains(event.target)
      )
      setIsOpen(fal)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })
  return (
    <div>
      <Tab />
      <div ref={outsideRef} className="mb-3">
        <Dropdown />
      </div>
      <Table />
    </div>
  )
}

export default StockByType
