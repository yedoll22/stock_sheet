import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Dropdown() {
  const [selected, setSelected] = useState('선택하세요.')
  const [isOpen, setIsOpen] = useState(false)

  const { pathname } = useLocation()
  let content = { title: '재질', text: ['350IV', '350B/W', '300ART'] }
  if (pathname === '/storage')
    content = {
      title: '위치',
      text: ['1층 위', '1층 밑', '소부실 앞', '인쇄실']
    }

  return (
    <div className="mb-7 flex item-center relative">
      <div className="font-bold mr-2">{content.title}</div>
      <div
        onClick={(e) => {
          setIsOpen(!isOpen)
        }}
        className="border rounded border-[#D5DBE2] w-1/4 h-7 items-center flex justify-between pl-3 py-1"
      >
        {selected}
        <img className="w-5 h-5" src="/images/Down arrow.png" alt="downArrow" />
        {isOpen && (
          <div className="absolute top-8 border border-gray-100 left-10 bg-white shadow-lg w-1/4 rounded py-2 px-[10px]">
            {content.text.map((data) => (
              <div
                onClick={() => setSelected(data)}
                key={data}
                className="py-[10px] pl-4 hover:bg-[#e3f2fd]"
              >
                {data}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
