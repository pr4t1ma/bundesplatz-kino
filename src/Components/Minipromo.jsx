import {
  faClock,
  faLocationArrow,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Minipromo = ({ img, time }) => {
  return (
    <div className="flex gap-10 my-5 border-y border-lightgray p-3">
      <img src={img} alt="" />
      <div className="movie-title">
        <h2 className="font-serif text-xl">Brave</h2>
        <div className="flex gap-5 my-5">
          <div className="icon">
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
          <div className="location">Bundesplatz Kino Berlin</div>
        </div>
        <div className="flex gap-5 my-5 text-center">
          <div className="icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="location">{time}</div>
        </div>
        <button className="border-black border-2 inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg hover:font-bold hover:border-brand-Medgray">
          <FontAwesomeIcon className="mr-2" icon={faPlay} />
          Trailer
        </button>
      </div>
    </div>
  );
};
