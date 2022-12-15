import { HeroBanner } from "./HeroBanner";

export const Banner = ({ img }) => {
  return (
    <div className="container mx-auto relative overflow-hidden">
      <img
        className="w-full absolute object-cover object-fit h-full"
        src={img}
        alt=""
      />
      <HeroBanner />
    </div>
  );
};
