import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Reviews from "./components/Reviews/Reviews";
import FlashcardsDescription from "./components/FlashcardsDescription/FlashcardsDescription";
import FAQSection from "./components/FAQSection/FAQSection";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <img
          className="logo"
          src="./Shutterstock_2221293351 (1).png"
          alt="logo"
          width={100}
        ></img>

        <Header />
        <Hero />
      </div>
      {/* <Products />
      <FlashcardsDescription />
      <Reviews />
      <Value />
      <FAQSection /> */}
      <Routes>
        <Route path='/faq'  element={<FAQSection/>} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
