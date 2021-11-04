import './App.css';
import Rack from './components/Rack/Rack'

function App() {

  const testHand = {
    tiles: ["B1", "B9", "D1", "D9", "C1", "C9", "DR", "DW", "DG", "WE", "WS", "WW", "WN"],
    rotation: {x: -10, y: -20, z: -20}
  };

  const singleTileHand = {
    tiles: ["B1"],
    rotation: {x: 0, y: 0, z: 0}
  }

  const testHand2 = {
    tiles: ["B1", "C1", "D1", "B2", "C2", "D2", "B3", "C3"],
    rotation: {x: -10, y: -10, z: 0}

  }

  return (
    <div className="app-container">
      <Rack hand={testHand} />
      {/* <Rack hand={singleTileHand} /> */}
    </div>
  );
}

export default App;
