function handleClick() {
    alert('Hello React Event');
}

function ClickMeBtn() {
    return (
        <button onClick={handleClick} className="p-2 bg-blue-400 text-white font-bold rounded hover:bg-blue-700 mb-10">Click Me!</button>
    )
}

export default ClickMeBtn;