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
  size: '규격',
  total: '수량',
  storage: '위치'
})

// 컬러값 서버에서 받지 않을 거면 STORAGE_NAME => STORAGE_INFO 와 같이 변경
const STORAGE_INFO = Object.freeze([
  { name: '1층 위', color: '#EDE7FB' },
  { name: '1층 밑', color: '#D4F8D3' },
  { name: '소부실 앞', color: '#FBE7E9' },
  { name: '인쇄실', color: '#FFF0BB' }
])

const STORAGE_NAME = STORAGE_INFO.map((storage) => storage.name)
const TYPE = Object.freeze(['350IV', '350B/W', '300ART'])

const PAGE_DROPDOWN_CONTENT = Object.freeze({
  type: {
    key: 'type',
    title: '재질',
    text: ['전체', ...TYPE]
  },
  storage: {
    key: 'storage',
    title: '위치',
    text: ['전체', ...STORAGE_NAME]
  }
})

// 🐹 패턴 추후 논의 후 추가 및 수정
const MODAL_DROPDOWN_CONTENT = Object.freeze({
  category: {
    key: 'category',
    title: '구분',
    text: ['입고', '출고', '재고 이동', '실재고 체크', '불량']
  },
  type: {
    key: 'type',
    title: '재질',
    text: TYPE
  },
  pattern: { key: 'pattern', title: '패턴', text: ['F013-투명', 'HP38'] },
  storage: {
    key: 'storage',
    title: '위치',
    text: STORAGE_NAME
  },
  storageFrom: {
    key: 'storageFrom',
    title: '보관 위치',
    text: STORAGE_NAME
  },
  storageTo: {
    key: 'storageTo',
    title: '이동 위치',
    text: STORAGE_NAME
  }
})

const ERROR_MSG = Object.freeze({
  dropdown: '모든 옵션을 선택 및 지정 해주세요.',
  positiveQuantity: '출고 시, 수량은 음수(-)로 입력해주세요',
  negativeQuantity: '출고가 아닐 시, 수량은 양수(+)로 입력해주세요.'
})

export {
  PATHNAME,
  TAB,
  THEAD,
  STORAGE_INFO,
  PAGE_DROPDOWN_CONTENT,
  MODAL_DROPDOWN_CONTENT,
  ERROR_MSG
}
