import { MetaData } from "./MetaDta";

export const EventBox = ({ img, title, text }) => {
  return (
    <div className="flex gap-10">
      <img className="span-5" src={img} alt="" />
      <div className="span-7">
        <h2 className="mb-3">{title}</h2>
        <p>{text}</p>
        <MetaData />
        <button className="button--secondary-dark ">Regiater</button>
      </div>
    </div>
  );
};
