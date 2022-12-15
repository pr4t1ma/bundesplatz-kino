import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeroBanner = () => {
  return (
    <div className="p-10 relative z-10 grid grid-cols-12 grid-rows-3 gap-5">
      {/* <img
        className="w-fit col-span-4 row-span-3"
        src="https://lumiere-a.akamaihd.net/v1/images/p_brave_20488_9e833e2b.jpeg"
        alt=""
      /> */}
      <div className="wrapper col-span-6 row-span-2 bg-black/25 p-10 text-White">
        <div className="banner-title text-white text-4xl font-serif">
          Brave Girl
        </div>
        <p className="text-white my-2">Produced by Disney in 20013</p>

        <button className="border-yellow-500 border-2 inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg  text-white hover:border-brand-Medgray">
          <FontAwesomeIcon className="mr-2" icon={faPlay} />
          Trailer
        </button>
      </div>
    </div>
  );
};
