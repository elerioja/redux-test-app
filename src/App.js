import "./App.css";
import Library from "./js/components/Library";
import PhotoWall from "./js/components/PhotoWall";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PhotoWall />
        <Library />
      </header>
    </div>
  );
}

export default App;
