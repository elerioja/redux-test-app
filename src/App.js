import "./css/entry.css";
import Library from "./js/components/Library";
import PhotoWall from "./js/components/PhotoWall";
import SearchBar from "./js/components/SearchBar";

function App() {
  return (
    <div className="App">
      <div className="photo-wall">
        <h1>Photos</h1>
        <SearchBar />
        <PhotoWall />
      </div>
      <Library />
    </div>
  );
}

export default App;
