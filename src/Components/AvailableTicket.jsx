import classNames from "classnames";
import { useState } from "react";

export const AvailableTicket = () => {
  const days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  const tabContent = [
    ["-", "-", "-", "-", "17:00", "-", "19:00"],
    ["9:00", "11:00", "12:00", "13:00", "17:00", "-", "19:00"],
    ["9:00", "11:00", "-", "-", "17:00", "-", "19:00"],
  ];
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className=" my-10 ">
      <div className="days grid grid-cols-7 gap-5">
        {days.map((day, idx) => (
          <button
            onClick={() => setSelectedDay(idx)}
            className={classNames(
              " text-white px-4 py-3",
              selectedDay === idx ? "bg-brand-primary" : "bg-gray-500"
            )}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="time grid grid-cols-7 gap-5 mt-5">
        {tabContent[selectedDay]?.map((time) => (
          <button className="border-gray-500 px-6 py-5">{time}</button>
        ))}
      </div>
    </div>
  );
};
