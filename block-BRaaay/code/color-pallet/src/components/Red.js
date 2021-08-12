import colors from "../data/colors";
import Pallets from "./Pallets";

function Red() {
    let values = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
     return (
         <section className="flex justify-between mt-20">
             <div className="w-2/6">
                 <h3 className="text-2xl font-bold">Red</h3>
                 <h5 >colors.red</h5>
             </div>
             <div className="flex-65 flex flex-wrap">
                 {
                         
                         colors["red"].map((color, i) => < Pallets color={color} value = {values[i]} key={i} />)
                         
                     
                 }
             </div>
         </section>
     )
 }

export default Red;