import Benefits from "./components/benefits";
import Home from "./components/home";
import NavBar from "./components/nav";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <NavBar />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
