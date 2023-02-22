import { memo } from 'react'

function Td({ cellContents }) {
  return (
    <>
      <td className="border border-slate-300 p-2 text-center">
        {Array.isArray(cellContents) === true
          ? cellContents.map((storage, i) => (
              <span
                className="border ml-1 mr-1 p-1 rounded-lg cursor-pointer"
                key={i}
              >
                {storage}
              </span>
            ))
          : cellContents}
      </td>
    </>
  )
}

export default memo(Td)
