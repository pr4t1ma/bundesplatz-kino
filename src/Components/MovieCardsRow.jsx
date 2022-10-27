export const MovieCard = ({ img, movietitle, text }) => {
  return (
    <div>
      <div className="col">
        <img src={img} alt="" />
      </div>
      <div className="col">
        <h1>{movietitle}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
