import { MetaData } from "./MetaDta";

export const EventMini = ({ img, title, text }) => {
  return (
    <div>
      <div className="event">
        <img src={img} alt="" />
        <h2 className="my-3">{title}</h2>
        <p>{text}</p>
        <MetaData />
        <button className="button--secondary-dark">Register</button>
      </div>
    </div>
  );
};
