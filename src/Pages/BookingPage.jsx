import { TicketCalc } from "../Components/TicketCalc";
import { Seat } from "../Components/AvaliableSeat";
import { MovieCard } from "../Components/MovieCardsRow";
export const BookingPage = () => {
  return (
    <div className="">
      <img
        className="w-full"
        src="https://images.thedirect.com/media/article_full/black-panther-wakanda-forever-trailer-chadwick-boseman-mcu-marvel_1.jpg"
        alt=""
      />
      <div className=" container mx-auto my-10 grid gap-5 grid-cols-12">
        <div className="col-span-4">
          <TicketCalc />
        </div>
        <div className="col-span-8">
          <Seat />
        </div>
      </div>
      <MovieCard />
    </div>
  );
};
