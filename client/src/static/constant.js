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

// 🐹 패턴, 수량은 추후 논의 후 추가 및 수정
const DROPDOWN_CONTENT = Object.freeze({
  type: { title: '재질', text: ['350IV', '350B/W', '300ART'] },
  pattern: { title: '패턴', text: ['F013투명', 'K196C'] },
  quantity: {
    title: '수량',
    text: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
  },
  storage: {
    title: '위치',
    text: ['1층 위', '1층 밑', '소부실 앞', '인쇄실']
  },
  category: {
    title: '구분',
    text: ['입고', '출고', '재고 이동', '실재고 체크', '불량']
  },
  storageFrom: {
    title: '보관 위치',
    text: ['1층 위', '1층 밑', '소부실 앞', '인쇄실']
  },
  storageTo: {
    title: '이동 위치',
    text: ['1층 위', '1층 밑', '소부실 앞', '인쇄실']
  }
})

export { PATHNAME, TAB, THEAD, DROPDOWN_CONTENT }
