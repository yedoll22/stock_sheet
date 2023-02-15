const PATHNAME = Object.freeze({
  type: '/type',
  storage: '/storage'
})

const TAB = Object.freeze({
  type: '재질별 재고 현황',
  storage: '위치별 재고 현황'
})

const THEAD = Object.freeze({
  type: '재질',
  pattern: '패턴',
  standard: '규격',
  quantity: '수량',
  storage: '위치'
})

const DROPDOWN_CONTENT = Object.freeze({
  type: { title: '재질', text: ['350IV', '350B/W', '300ART'] },
  storage: {
    title: '위치',
    text: ['1층 위', '1층 밑', '소부실 앞', '인쇄실']
  }
})

export { PATHNAME, TAB, THEAD, DROPDOWN_CONTENT }
