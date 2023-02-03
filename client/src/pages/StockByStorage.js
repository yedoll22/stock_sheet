import { useRef, useEffect } from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'

function useOutSideRef() {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(outside)
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return ref
}

function StockByStorage() {
  const outsideRef = useOutSideRef(null)
  return (
    <>
      <Tab />
      <div ref={outsideRef} className="mb-3">
        <Dropdown />
      </div>
      <Table />
    </>
  )
}

export default StockByStorage
