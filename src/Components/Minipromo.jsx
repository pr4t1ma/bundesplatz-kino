import {
  faClock,
  faLocationArrow,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Minipromo = ({ img, time }) => {
  return (
    <div className="flex gap-7 my-5 border border-lightgray p-3">
      <img className="w-40 h-40 object-cover" src={img} alt="" />
      <div className="movie-title">
        <h2 className="font-serif text-xl">Brave</h2>
        <div className="flex gap-3  mt-3">
          <div className="icon">
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
          <div className="location">Bundesplatz Kino Berlin</div>
        </div>
        <div className="flex gap-5 mt-2 text-center">
          <div className="icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="location">{time}</div>
        </div>
        <button className="button--secondary mt-4">
          <FontAwesomeIcon className="mr-2" icon={faPlay} />
          Trailer
        </button>
      </div>
    </div>
  );
};
