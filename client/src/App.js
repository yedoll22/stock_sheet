import { useState } from 'react'

const [isOpen, setIsOpen] = useState(false)

function App() {
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <div onClick={handleClick}> 클릭 </div>
      {isOpen ? (
        <div>
          <ul>
            <li>350IV</li>
            <li>300ART</li>
            <li>350B/W</li>
          </ul>
        </div>
      ) : (
        <div>클릭해주세요~</div>
      )}
    </div>
  )
}

export default App
