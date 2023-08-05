import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import { Home, Resume, About, Contact, Product, Educated } from "./page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-r from-sky-300 to-green-300 overflow-hidden h-auto">
      <Navbar />
      <Home />
      <Resume />
      <About />
      <Educated />
      <Product />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
