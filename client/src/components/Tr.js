import { useMemo } from 'react'
import changeByTableByPathname from '../util/changeByTableByPathname'
import Td from './Td'

function Tr({ pathname, rowContents }) {
  const content = useMemo(
    () => changeByTableByPathname(pathname, rowContents),
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
