import Benefits from "./components/benefits";
import Home from "./components/home";
import NavBar from "./components/nav";
import OurClasses from "./components/ourClasses";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <NavBar />
      <Home />
      <Benefits />
      <OurClasses />
    </div>
  );
}

export default App;
