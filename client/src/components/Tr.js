import { useMemo } from 'react'
import changeByPathname from '../util/changeByPathname'
import Td from './Td'

function Tr({ pathname, rowContents }) {
  const content = useMemo(
    () => changeByPathname(pathname, rowContents),
    [pathname, rowContents]
  )

  return (
    <tr>
      {content.map((td, i) => (
        <Td key={i} cellContents={td} />
      ))}
    </tr>
  )
}

export default Tr
