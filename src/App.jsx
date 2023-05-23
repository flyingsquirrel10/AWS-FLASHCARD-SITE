import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Header />
        <Hero />
      </div>
      <Products />
      <Value />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
