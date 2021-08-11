function handleClick(event) {
    switch (event.target.innerText) {
        case "Arya":
           alert("Hello Arya");
            break;
        case "John":
             alert("Hello John");
            break;
        default:
             alert("Hello Bran");
            break;
    }
}

function PersonBtn() {
    return (
        <div className="flex justify-between">
            <button onClick={ (event) =>  handleClick(event)} className="p-2 bg-blue-400 text-white font-bold rounded hover:bg-blue-700 mb-10 mr-5">Arya</button>
            <button onClick={ (event) =>  handleClick(event)} className="p-2 bg-blue-400 text-white font-bold rounded hover:bg-blue-700 mb-10 mr-5">John</button>
            <button onClick={ (event) =>  handleClick(event)} className="p-2 bg-blue-400 text-white font-bold rounded hover:bg-blue-700 mb-10">Bran</button>
        </div>
        
    )
}

export default PersonBtn;