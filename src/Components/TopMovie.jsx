export const TopMovie = ({ img, title, text }) => {
  return (
    <div className="card my-5">
      <img className="w-full object-cover h-70" src={img} alt="" />
      <div className="subtitle my-3 text-2xl font-serif">
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};
