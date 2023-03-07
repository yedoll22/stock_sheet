function Button({ children, styles, handleClickBtn }) {
  return (
    <button
      className={`mx-2 px-6 py-1 rounded-md font-semibold ${styles}`}
      onClick={handleClickBtn}
    >
      {children}
    </button>
  )
}

export default Button
