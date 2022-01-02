import "./App.scss";
import GlobalStateProvider from "./context/GlobalStateProvider";
import HomeScreen from "./screens/Home";

function App() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <HomeScreen />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
