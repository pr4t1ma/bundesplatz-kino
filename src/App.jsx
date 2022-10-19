import "./App.css";
import "./index.css";
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { Leftmoviebox } from "./Components/Leftmoviebox";
import { MainContent } from "./Components/MainContent";
import { TopMovie } from "./Components/TopMovie";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App bg-white ">
      <Header />
      <Banner />
      <div className="container mx-auto grid  grid-cols-12 gap-20">
        <div className="col-span-5">
          <Leftmoviebox />
        </div>
        <div className="col-span-7">
          <MainContent />
        </div>
      </div>

      <div className="container mx-auto ">
        <h2>Top movies</h2>
        <div className="gap-6 container mx-auto flex flex-nowrap">
          <TopMovie
            img="https://lumiere-a.akamaihd.net/v1/images/p_brave_20488_9e833e2b.jpeg"
            title="Brave"
            text=" Es ist bekannt, dass der Bollywood-Schauspieler Varun Dhawan seit seinen
        WWE-Tagen ein großer Fan von Dwayne Johnson ist…"
          />
          <TopMovie
            img="https://i.ebayimg.com/images/g/BdoAAOSwzgdiHKBN/s-l500.jpg"
            title="Brave"
            text=" Es ist bekannt, dass der Bollywood-Schauspieler Varun Dhawan seit seinen
        WWE-Tagen ein großer Fan von Dwayne Johnson ist…"
          />
          <TopMovie
            img="https://qqcdnpictest.mxplay.com/pic/c7d1ca32774fb050286ef81dfab6653b/en/2x3/320x480/6da7688e8a6a1126af7c65e2ff4b4434_1280x1920.webp"
            title="Brave"
            text=" Es ist bekannt, dass der Bollywood-Schauspieler Varun Dhawan seit seinen
        WWE-Tagen ein großer Fan von Dwayne Johnson ist…"
          />
          <TopMovie
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAT6R5qrXa5Tt7hcEQuCz0yzBnYsqFvycUZpGmcW7yi9KSvr5shgO5s7Ls4mqTC93OM8&usqp=CAU"
            title="Brave"
            text=" Es ist bekannt, dass der Bollywood-Schauspieler Varun Dhawan seit seinen
        WWE-Tagen ein großer Fan von Dwayne Johnson ist…"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
