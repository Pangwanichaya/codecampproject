import "./App.css";
import Footer from "./component/footer/Footers";
import Header from "./component/header/Header";
import Home from "./pages/Home";
// import Food from "./pages/Food";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
