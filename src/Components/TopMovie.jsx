import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TopMovie = ({ img, title, text }) => {
  return (
    <div className="card my-5">
      <img className="w-full object-cover h-70" src={img} alt="" />
      <div className="subtitle my-3 text-2xl font-serif">
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
      <div className="flex gap-5 my-5">
        <button className=" border-yellow-500 border-2 inline-flex items-center py-2 px-4 text-sm font-medium rounded-lg  ">
          <FontAwesomeIcon className="mr-2" icon={faPlay} />
          Trailer
        </button>
        <button className="button--secondary-dark ">Book</button>
      </div>
    </div>
  );
};
