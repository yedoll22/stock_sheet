const addThousandsCommaInTableData = (tableContents) => {
  return tableContents.map((rowContents) => ({
    ...rowContents,
    total: Number(rowContents.total).toLocaleString()
  }))
}

export default addThousandsCommaInTableData
