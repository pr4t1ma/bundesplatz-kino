import { HeroBanner } from "./HeroBanner";

export const Banner = ({ img }) => {
  return (
    <div className="container mx-auto relative overflow-hidden">
      <img className="w-full absolute" src={img} alt="" />
      <HeroBanner />
    </div>
  );
};
