
function Button() {
    return(
        <button onDoubleClick={e => {
            (e.target as HTMLElement).textContent = "OUCH 🤕";
            }
        }>Click Me😊</button>
    )
}
export default Button