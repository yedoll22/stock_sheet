import { useRef, useEffect } from 'react'
import Dropdown from '../components/Dropdown'
import Tab from '../components/Tab'
import Table from '../components/Table'
function useOutSideRef() {
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
      console.log(ref.current.contains(event.target))
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(`div 외부 클릭을 감지!`)
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return ref
}

function StockByType() {
  const outsideRef = useOutSideRef(null)
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
