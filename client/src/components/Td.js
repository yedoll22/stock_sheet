import { memo } from 'react'
import { STORAGE_INFO } from '../static/constant'

function Td({ cellContents }) {
  // 위치(storage) 데이터가 문자열 => 배열로 수정되면 함수 및 jsx 리턴부문도 수정할 것
  // 1층 위 빼고 bg 컬러코드가 제대로 안 먹힘 (다른 컬러코드는 됨 / 컬러코드 다시 상의하기)
  const getStorageStyle = (cell) => {
    for (let i = 0; i < STORAGE_INFO.length; i++) {
      if (STORAGE_INFO[i].name === cell) {
        return `border m-1 py-1 px-2 rounded-xl bg-[${STORAGE_INFO[i].color}]`
      }
    }
    return null
  }

  return (
    <>
      <td className="border border-slate-300 p-2 text-center">
        {/* {Array.isArray(cellContents)
          ? cellContents.map((storage, i) => (
              <span className="border ml-1 mr-1 p-1 rounded-lg" key={i}>
                {storage}
              </span>
            ))
          : cellContents} */}
        <span className={getStorageStyle(cellContents)}>{cellContents}</span>
      </td>
    </>
  )
}

export default memo(Td)
