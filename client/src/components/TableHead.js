import { useMemo } from 'react'
import { THEAD } from '../static/constant'
import changeByTableByPathname from '../util/changeByTableByPathname'

import Th from './Th'

function TableHead({ pathname }) {
  const content = useMemo(
    () => changeByTableByPathname(pathname, THEAD),
    [pathname]
  )

  return (
    <thead>
      <tr>
        {content.map((th) => (
          <Th key={th} tableHeader={th} />
        ))}
      </tr>
    </thead>
  )
}

export default TableHead
