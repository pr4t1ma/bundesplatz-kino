export const TicketCalc = () => {
  return (
    <div className=" my-2">
      <h2>Your selected seat</h2>
      <span className="py-5">3 seat</span>
      <table className="Py-3">
        <tr className="flex gap-5 justify-center">
          <th className="px-5 py-3 border-gray-300 bg-black text-yellow-400">
            H 23
          </th>
          <th className="px-5 py-3 border-gray-300 bg-black text-yellow-400">
            H 23
          </th>
          <th className="px-5 py-3 border-gray-300 bg-black text-yellow-400">
            H 23
          </th>
        </tr>

        <tr className="flex gap-5 justify-between">
          <th className=" py-3">Normal</th>
          <th className=" py-3">3</th>
          <th className=" py-3">$30</th>
        </tr>
        <tr className="flex gap-5 justify-between">
          <th className=" py-3">Deluex</th>
          <th className=" py-3">-</th>
          <th className=" py-3">$0</th>
        </tr>
        <tr className="flex gap-5 justify-between border-b-2">
          <th className="py-3">Super</th>
          <th className="py-3">-</th>
          <th className="py-3">$0</th>
        </tr>
        <tr className="flex mb-5 justify-between">
          <th>Total</th>
          <th>$30</th>
        </tr>
        <button
          className="bg-black py-3 px-5 text-white my-3 rounded-lg
         w-full "
        >
          Add menu
        </button>
        <button className="bg-yellow-500 py-3 px-5 text-black  rounded-lg w-full ">
          Purchases
        </button>
      </table>
    </div>
  );
};
