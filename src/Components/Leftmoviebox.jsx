import { Link } from "react-router-dom";
import { Minipromo } from "./Minipromo";

export const Leftmoviebox = () => {
  return (
    <div className="col-span-2 mx-auto my-10 ">
      <h2>Heute</h2>
      <Link to ="/booking">
      <Minipromo
        img="https://preview.redd.it/black-panther-wakanda-forever-poster-design-art-by-v0-iw9s7oa7rfq91.jpg?width=640&crop=smart&auto=webp&s=dff0d6025c7113367818de1e65e9e882449870a5"
        time="17:00"
        title="Wakanda Forever"
      />
      </Link>

    

      <Minipromo
        img="https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/avatar2-20200724094747-15106.jpg"
        time="16:00"
        title ="Avaitar"
      />

      <Minipromo
        img="https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/thorloveandthunder-20220709184121-18873.jpg"
        time="13:00"
        title="Thor"
      />
    </div>
  );
};
