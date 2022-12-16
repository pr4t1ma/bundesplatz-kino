import { Banner } from "../Components/Banner";
import { Leftmoviebox } from "../Components/Leftmoviebox";
import { TopMovie } from "../Components/TopMovie";

export const Programme = () => {
  return (
    <div className="container mx-auto  ">
      <Banner
        img={
          "https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg?w=1024"
        }
      />

      <div className="container mx-auto grid  grid-cols-12 gap-20">
        <div className="col-span-4">
          <Leftmoviebox />
        </div>
        <div className="col-span-8 my-10">
          <div className="   ">
            <h2>Top movies</h2>
            <div className="gap-6 container mx-auto flex flex-nowrap">
              <TopMovie
                img="https://lumiere-a.akamaihd.net/v1/images/p_brave_20488_9e833e2b.jpeg"
                title="Brave"
                text=" Set in Scotland in a rugged and mythical time, this movie features Princess Merida (Kelly Macdonald), an aspiring archer and impetuous daughter of Queen Elinor"
              />
              <TopMovie
                img="https://i.ebayimg.com/images/g/BdoAAOSwzgdiHKBN/s-l500.jpg"
                title="Black Adam"
                text=" Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam!"
              />
              <TopMovie
                img="https://qqcdnpictest.mxplay.com/pic/c7d1ca32774fb050286ef81dfab6653b/en/2x3/320x480/6da7688e8a6a1126af7c65e2ff4b4434_1280x1920.webp"
                title="City of Gold"
                text="Seven Cities of Gold ; Quivira, one of the mythical seven Cities of Gold ; El Dorado, mythical city of gold in South America ; City of the Caesars, mythical South ..…"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
