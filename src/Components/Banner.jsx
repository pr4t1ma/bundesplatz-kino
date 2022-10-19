import { HeroBanner } from "./HeroBanner";

export const Banner = () => {
  return (
    <div className="container mx-auto relative overflow-hidden">
      <img
        className="w-full absolute"
        src="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/5/6/w1200X800/Cine_Hall.jpg"
        alt=""
      />
      <HeroBanner />
    </div>
  );
};
