import './App.css';
import Table from './components/Table/Table';
import Rack from './components/Rack/Rack';

function App() {
  return (
    <div className="app-container">
      <Rack hand={testHand}/>
    </div>
  );
}

export default App;

const testHand = {
  tiles: ["B1", "B9", "D1", "D9", "C1", "C9", "DR", "DW", "DG", "WE", "WS", "WW", "WN"],
  rotation: {x: -20, y: 0, z: 0}
};