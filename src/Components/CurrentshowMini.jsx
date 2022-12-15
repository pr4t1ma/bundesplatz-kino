import { faClock, faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CurrenrtshowMini = ({ time, img, title, text }) => {
  return (
    <div className="container mx-auto mb-5">
      <div className="grid grid-cols-12  gap-3 bg-gray-100 ">
        <div className="time col col-span-1 border-yellow-500 border-l-4 flex gap-3 items-center pl-3 ">
          <FontAwesomeIcon icon={faClock} />
          {time}
        </div>
        <div className="text-center col col-span-2 py-3">
          <img className=" h-32 object-cover w-32 mx-auto" src={img} alt="" />
        </div>

        <div className="movie-title col col-span-4 py-3">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="review col col-span-2 self-center">
          Review{" "}
          <FontAwesomeIcon className="text-brand-primary" icon={faStar} />
          <FontAwesomeIcon className="text-brand-primary" icon={faStar} />
          <FontAwesomeIcon className="text-brand-primary" icon={faStar} />
        </div>
        <div className="col col-span-3 flex items-center gap-3 pr-3">
          <button className=" border-yellow-500 border-2 inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg  ">
            <FontAwesomeIcon className="mr-2" icon={faPlay} />
            Trailer
          </button>

          <button className="button--secondary-dark ">Book</button>
        </div>
      </div>
    </div>
  );
};
