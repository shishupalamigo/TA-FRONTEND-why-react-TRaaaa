function Pallets(props) {
     
    return(
        <>
            <div className="w-1/5 flex-col parent">
                <div className="" style={{backgroundColor: props.color, padding: "1rem", marginLeft: "20px"}}></div>
                <div className="flex justify-between ml-10">
                    <span className="span">{props.value}</span>
                    <span className="span2 span">{props.color}</span>
                </div>
            </div>
            
        </>
    )
}
export default Pallets;