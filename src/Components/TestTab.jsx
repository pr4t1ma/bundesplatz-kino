import classNames from "classnames";
import { useState } from "react";

export const TestTab = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const tabContent = [
    "hello this is a s text",
    "hello this is a m text",
    "hello this is a t text",
    "hello this is a w text",
    "hello this is a t text",
    "hello this is a f text",
    "hello this is a sa text",
  ];
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <div>
      {days.map((day, index) => (
        <button
          onClick={() => setSelectedDay(index)}
          className={classNames(
            "text-white  my-3 mx-3 px-6 py-3",
            selectedDay === index ? "bg-yellow-500" : "bg-gray-300"
          )}
        >
          {day}
        </button>
      ))}
      {tabContent[selectedDay]}
    </div>
  );
};
