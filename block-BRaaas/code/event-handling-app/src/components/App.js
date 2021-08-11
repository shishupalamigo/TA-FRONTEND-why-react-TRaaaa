import ClickMeBtn from "./ClickMeBtn";
import HelpBtn from "./HelpBtn";
import PersonBtn from "./PersonBtn";
import FruitsBtn from "./FruitsBtn";

function App() {
    return (
        <div className="m-20 flex items-center flex-col">
        <ClickMeBtn />
        <HelpBtn />
        <PersonBtn />
        <FruitsBtn />
        </div>
    )
}

export default App;