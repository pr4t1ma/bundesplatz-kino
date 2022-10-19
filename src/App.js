import './App.css';
import { Menu } from './Components/Menu';
import { Logo } from './Components/Logo';
import './index.css';
import { Button } from './Components/Button';
import { Banner } from './Components/Banner';
import { Leftmoviebox } from './Components/Leftmoviebox';
import { MainContent } from './Components/MainContent';
import { TopMovie } from './Components/TopMovie';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { Footer } from './Components/Footer';

function App() {
  const menuItems = [
    { label: 'Actuelles', href: '/' },
    { label: 'Spielen und Reservierungome', href: '/' },
    { label: 'Vorschau', href: '/' },
    { label: 'GutScheine', href: '/' },
    { label: 'Newsletter', href: '/' },
    { label: 'Gastebuch', href: '/' },
  ];
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App bg-white ">
      <header className="App-header container mx-auto grid  grid-cols-12  my-10">
        <Logo />
        {!isMenuOpen && (
          <button onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}

        {isMenuOpen && (
          <button onClick={() => setMenuOpen(false)}>
            <FontAwesomeIcon icon={faMultiply} />
          </button>
        )}

        {isMenuOpen && <Menu menuItems={menuItems} />}

        <Button />
      </header>
      <Banner />
      <div className="container mx-auto flex gap-10">
        <Leftmoviebox />
        <MainContent />
      </div>

      <div className="container mx-auto ">
        <h1>Top movies</h1>
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
