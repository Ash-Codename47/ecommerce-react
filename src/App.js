import "./App.css";
import Footer from "./Core/Components/Layouts/Footer";
import Landing from "./Core/Components/Layouts/Landing";
import Navbar from "./Core/Components/Layouts/Navbar";
import MainRouter from "./Root-Routers";
function App() {
  const appName = "Mindsprint";
  return (
    <div className="App">
      <Navbar appName={"Mindsprint"} />
      <MainRouter />
      <Footer></Footer>
    </div>
  );
}

export default App;
