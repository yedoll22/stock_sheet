import Button from '../UI/Button'

function StockManagementButtons({ handleSubmit, handleToggle }) {
  return (
    <div className="flex justify-center mt-4">
      <Button styles="bg-[#074073] text-white" handleClickBtn={handleSubmit}>
        저장하기
      </Button>
      <Button styles="border" handleClickBtn={handleToggle}>
        취소하기
      </Button>
    </div>
  )
}

export default StockManagementButtons
