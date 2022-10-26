import classNames from "classnames";
import { useState } from "react";
const seatStatusFromServer = {
  A2: "reserved",
  A3: "booked",
  A4: "selected",
  D6: "reserved",
};
export const Seat = () => {
  const rows = ["A", "B", "C", "D", "E"];
  const cols = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [seatStatus, setSeatStatus] = useState(seatStatusFromServer);
  return (
    <div className="">
      <div className="flex justify-end gap-5 my-5">
        <div>
          <div className="bg-booking-reserved px-4 py-3"></div>
          <span className="block">Reserved</span>
        </div>
        <div>
          <div className="bg-booking-selected px-4 py-3"></div>
          <span className="block">selected</span>
        </div>
        <div>
          <div className="bg-booking-booked px-4 py-3"></div>
          <span className="block">Booked</span>
        </div>
        <div>
          <div className="bg-booking-available px-4 py-3"></div>
          <span className="block">Available</span>
        </div>
      </div>

      {rows.map((row) => (
        <div className="flex gap-10">
          {cols.map((col) => (
            <button
              onClick={() => {
                let newStatus = "selected";
                if (seatStatus[row + col] === "selected") {
                  newStatus = "";
                } else if (seatStatus[row + col] === "booked") {
                  newStatus = "booked";
                } else if (seatStatus[row + col] === "reserved") {
                  newStatus = "reserved";
                }
                setSeatStatus((old) => ({
                  ...old,
                  [`${row + col}`]: newStatus,
                }));
              }}
              className={classNames(
                " text-white px-5 py-2 my-2 rounded-lg w-20",
                {
                  "bg-booking-reserved": seatStatus[row + col] === "reserved",
                  "bg-booking-selected": seatStatus[row + col] === "selected",
                  "bg-booking-booked": seatStatus[row + col] === "booked",
                  "bg-booking-available": !seatStatus[row + col],
                }
              )}
            >
              {row + col}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
