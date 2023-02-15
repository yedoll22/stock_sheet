import { useEffect, useState, useRef } from 'react'

const useOutSideRef = (initialState) => {
  const [isOpen, setIsOpen] = useState(initialState)
  const outsideRef = useRef(null)

  useEffect(() => {
    const onClickOutside = (event) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)

    return () => {
      document.removeEventListener('click', onClickOutside)
    }
  })

  return [outsideRef, isOpen, setIsOpen]
}

export default useOutSideRef
