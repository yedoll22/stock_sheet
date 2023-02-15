import { useState } from 'react'

function Dropdown({
  outsideRef,
  isOpen,
  setIsOpen,
  content,
  checkIsStockMove
}) {
  const [selected, setSelected] = useState('선택하세요.')

  // 🐹 checkIsStockMove is not a function 에러 발생 => 해결해야 됨
  const selectOption = (data) => {
    setSelected(data)
    checkIsStockMove(data)
  }

  return (
    <div className="mb-7 flex item-center relative">
      <div className="font-bold mr-3">{content.title}</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        ref={outsideRef}
        className="border border-[#D5DBE2] rounded h-7 min-w-[8rem] items-center flex justify-between pl-3 py-1 cursor-pointer"
      >
        {selected}
        <img className="w-5 h-5" src="/images/Down arrow.png" alt="downArrow" />
        {isOpen && (
          <div className="absolute top-8 left-10 border border-gray-100 bg-white shadow-lg rounded py-2 px-[10px] min-w-[8rem] z-20">
            {content.text.map((data) => (
              <div
                onClick={() => selectOption(data)}
                key={data}
                className="py-1 hover:bg-[#e3f2fd]"
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
