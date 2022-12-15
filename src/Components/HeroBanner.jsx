import { faClock, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeroBanner = () => {
  return (
    <div className="p-10 relative z-10 grid grid-cols-12 grid-rows-3 gap-5 ">
      <div className="wrapper col-span-6 row-span-2 bg-black/25 p-10 text-White">
        <div className="banner-title text-white text-4xl font-serif">
          Brave Girl
        </div>
        <p className="text-white my-2">Produced by Disney in 20013</p>
        <div>
          <div className="time text-white flex items-center gap-3 my-5 text-xl  ">
            <FontAwesomeIcon className="text-white " icon={faClock} />
            1h30
          </div>
          <div className="text-white mb-5">
            <FontAwesomeIcon
              className="text-yellow-600 text-2xl mr-3 "
              icon={faStar}
            />
            7.1/10
          </div>
        </div>

        <button className="border-yellow-500 border-2 inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg  text-white hover:border-brand-Medgray">
          <FontAwesomeIcon className="mr-2" icon={faPlay} />
          Trailer
        </button>
      </div>
    </div>
  );
};
