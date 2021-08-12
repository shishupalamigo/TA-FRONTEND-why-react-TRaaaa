import colors from "../data/colors";
import Pallets from "./Pallets";

function PalletWrapper({color = 'gray', label={header: 'Gray', subHeader: 'Colors.coolGray'}}) {
    let values = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
     return (
         <section className="flex justify-between mb-20 border p-5">
             <div className="w-2/6">
                 <h3 className="text-2xl font-bold">{label.header}</h3>
                 <h5 >{label.subHeader}</h5>
             </div>
             <div className="flex-65 flex flex-wrap">
                 {
                         
                         colors[color].map((color, i) => < Pallets color={color} value = {values[i]} key={i} />)
                 }
             </div>
         </section>
     )
 }

export default PalletWrapper;