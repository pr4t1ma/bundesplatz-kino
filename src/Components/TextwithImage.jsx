import classNames from "classnames";

export const TextwithImage = ({ img, text, title, reverse }) => {
  return (
    <div
      className={classNames("flex gap-20 my-20", reverse && "flex-row-reverse")}
    >
      <div className="w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="w-1/2">
        <h2 className="mb-5">{title}</h2>
        <div className="rich-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};
