import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import partnerLogo from "../images/partnerLogo.png";
export const Footer = () => {
  return (
    <div className="footer     bg-black text-white border-y p-3 py-10 my-10">
      <div className="container mx-auto grid grid-cols-12">
        <div className="footerMenu col-span-3">
          <ul>
            <li>Bundesplatz 14 10715 Berlin</li>
            <li>U + S-Bhf Bundesplatz (U9 - S 41,42,46) Bus 248, N9</li>
            <li>Telephone </li>
            <span>Tel.: 030 / 85 40 60 85</span>
            <span>Saal ist barrierefrei</span>
            <h3>OEFFNUNGSZEITEN</h3>
          </ul>
        </div>
        <div className="col-span-2">
          <ul>
            <li>Actuelles</li>
            <li>Spielen und Reservierung</li>
            <li>Vorchau</li>
            <li>GutScheine</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="col-span-2">
          <ul>
            <li>Eintrittspreise</li>
            <li>-Erwachsene 9,-- €</li>
            <li>-Kinder (bis 12 J.) 5,-- €</li>
            <li>-ermäßigt 8,-- €</li>
            <li>Movies</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 col-span-3">
          <label htmlFor="Subscription">Subscription</label>
          <div>
            <input
              className="border py-3 px-5"
              type={"email"}
              placeholder="Email"
            />
            <button className="border px-5 py-3">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <img src={partnerLogo} alt="" />
        </div>
      </div>
    </div>
  );
};
