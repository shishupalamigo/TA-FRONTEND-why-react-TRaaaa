let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];

function handleClick(name) {
  alert(name);
}

function Btn(props) {
      return (
        <button onClick={() =>  handleClick(props.id)} className="p-2 bg-blue-400 text-white font-bold rounded hover:bg-blue-700 mb-10 mr-5">{props.value}</button>
      )
  }

function FruitsBtn() {
    return (
      <div>
        {fruits.map((fruit, i) => <Btn key={i} {...fruit}/>
        )}        
      </div>

    )
} 

export default FruitsBtn;
