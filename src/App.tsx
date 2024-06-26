import { useState } from "react";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/Home/About.tsx";
import ContactUs from "./pages/Home/ContactUs.tsx";
import Nav from "./components/Nav/nav.tsx";

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  ChakraProvider,
} from "@chakra-ui/react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import WebsiteInProgress from "./pages/Home/WebsiteInProgress.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/inprogress" element={<WebsiteInProgress />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
