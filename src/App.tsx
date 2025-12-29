import NavBar from "./components/nav";
import Home from "./components/home";
import Benefits from "./components/benefits";
import OurClasses from "./components/ourClasses";
import ContactUs from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <NavBar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
