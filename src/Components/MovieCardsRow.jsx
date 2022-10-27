import { MovieCast } from "./MovieCast";

export const MovieCardsRow = ({ img, title, text, casts }) => {

  return (
    <div className="container mx-auto my-10 grid grid-cols-12 gap-10">
      <div className="col col-span-4">
        <img src={img} alt="movie" />
      </div>
      <div className="col col-span-8">
        <h1 className="mb-5">{title}</h1>
        <p>{text}</p>
        <div className="flex gap-2">
            {casts.map(cast => 
        
        <MovieCast img={cast.img} name={cast.name}/>
        )}
        </div>
      
      </div>
    </div>
  );
};
