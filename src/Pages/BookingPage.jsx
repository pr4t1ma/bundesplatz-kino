import { TicketCalc } from "../Components/TicketCalc";
import { Seat } from "../Components/AvaliableSeat";
import {  MoviedetailsCard } from "../Components/MoviedetailsCard";

export const BookingPage = () => {
  return (
    <div className="container mx-auto my-10">
      <MoviedetailsCard title="Wakanda Forever" 
text="lorem Black Panther: Wakanda Forever is a 2022 American superhero film based on the Marvel Comics character Black Panther. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Black Panther (2018) and the 30th film in the Marvel Cinematic Universe (MCU). The film is directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and stars Letitia Wright, Lupita Nyong'o, Danai Gurira, Winston Duke, Dominique Thorne, Florence Kasumba, Michaela Coel, Tenoch Huerta, Martin Freeman, and Angela Bassett. In the film, the leaders of Wakanda fight to protect their nation in the wake of King T'Challa's death" img="https://de.web.img2.acsta.net/r_1280_720/newsv7/22/06/10/13/28/2791732.jpg" 
casts={[
    {name: "Dominique Thorne", img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F10%2F05%2FDominique-Thorne_100522.jpg"},
    {name: "Letitia Wright", img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/C5D5/production/_120254605_letitia_wright_getty.jpg"},
    {name: "Daniel Kaluuya", img: "https://flxt.tmsimg.com/assets/580280_v9_bc.jpg"},
    {name:"anil", img:"https://st2.depositphotos.com/1814084/7542/i/450/depositphotos_75429605-stock-photo-angela-bassett-actress.jpg"},
  ]}/>
   
      <div className=" container mx-auto my-20 grid gap-5 grid-cols-12">
        <div className="col-span-4">
          <TicketCalc />
        </div>
        <div className="col-span-8">
          <Seat />
          
        </div>
      </div>


    </div>
  );
};
