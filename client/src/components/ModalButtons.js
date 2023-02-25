function ModalButtons({ category, handleSubmit, handleToggle }) {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="mx-2 px-6 py-1 rounded-md bg-[#074073] text-white font-semibold"
        onClick={() => handleSubmit(category)}
      >
        저장하기
      </button>
      <button
        className="mx-2 px-6 py-1 border rounded-md font-semibold"
        onClick={handleToggle}
      >
        취소하기
      </button>
    </div>
  )
}

export default ModalButtons
