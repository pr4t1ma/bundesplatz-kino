import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";

import { Footer } from "./Components/Footer";

import { HomePage } from "./Pages/Homepage";
import { BookingPage } from "./Pages/BookingPage";

function App() {
  return (
    <div className="App bg-white ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
