import "./App.css";
import "./index.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import { Header } from "./Components/Header";

import { Footer } from "./Components/Footer";

import { BookingPage } from "./Pages/BookingPage";
import { HomePage } from "./Pages/TodaysShows";
import { Programme } from "./Pages/Programme";
import { EventPage } from "./Pages/EventPage";

function App() {
  return (
    <div className="App bg-white ">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/programme" element={<Programme />}></Route>
          <Route path="/event" element={<EventPage />}></Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
