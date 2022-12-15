import {
  faCalendar,
  faClock,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MetaData = () => {
  return (
    <div>
      <div className="date-time flex gap-3 my-2">
        <div className="time">
          <FontAwesomeIcon icon={faClock} /> 11:00
        </div>
        <div className="date">
          <FontAwesomeIcon icon={faCalendar} />
          {"  "}
          23.12.2022
        </div>
      </div>
      <div className="location my-3">
        <FontAwesomeIcon icon={faLocation} />
        Bundesplatzkino, Musterstrasse 12. 12345 Berlin
      </div>
    </div>
  );
};
