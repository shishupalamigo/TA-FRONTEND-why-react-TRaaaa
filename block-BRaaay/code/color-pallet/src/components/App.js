import PalletWrapper from './PalletWrapper';
import colors, { colorDetails } from '../data/colors';

function App() {
  const allColor = Object.keys(colors);

  return (
    <>
      <h1 className="text-center mb-10 text-4xl font-bold">Color Pallets UI</h1>
      {allColor.map((color) => (
        <PalletWrapper key={color}  {...colorDetails[color]} />
      ))}
    </>
  );
}

export default App;
