import { Minipromo } from './Minipromo';

export const Leftmoviebox = () => {
  return (
    <div className="container mx-auto my-10 border-gray border-2">
      <h1 className="font-serif text-2xl my-3">Heute</h1>

      <Minipromo
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGZwqVu-fSuN6JwAP32yr0k87Ei5mts2wDp644ACnszEHfH2UXWWYVEFPd5_92D_zPOU&usqp=CAU"
        time="17:00"
      />

      <Minipromo
        img="https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/avatar2-20200724094747-15106.jpg"
        time="16:00"
      />

      <Minipromo
        img="https://www.filmibeat.com/img/226x100x283/popcorn/movie_posters/thorloveandthunder-20220709184121-18873.jpg"
        time="13:00"
      />
    </div>
  );
};
