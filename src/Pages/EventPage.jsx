import { EventBox } from "../Components/EventBox";
import { EventBoxReverse } from "../Components/EventBoxReverse";

export const EventPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="mb-5">Events</h1>
      <EventBox
        img="https://scontent.ftxl2-1.fna.fbcdn.net/v/t39.30808-6/315129813_591041576156711_2254570832593253439_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=2ax9KDtcp84AX8pXyIt&_nc_ht=scontent.ftxl2-1.fna&oh=00_AfDenr8GkBM_SvCN2Sd3rExC-GBdfQLBA7wIyPQPMFUQ_w&oe=639FE85A"
        title="Aniversary"
        text="Toys is visually one of the most extraordinary films I've seen, a delight for the eyes, a bright new world.
        <br>
        It takes place within the entirely imaginary world of a giant toy corporation, which springs from a limitless grain field as if there were no other buildings on earth. I've seen, a delight for the eyes, a bright new world. It takes place within the entirely imaginary world of a giant toy corporation, which springs from a limitless grain field as if there were no other buildings on earth."
      />
      <EventBoxReverse
        img="https://scontent.ftxl2-1.fna.fbcdn.net/v/t39.30808-6/318156595_606010407993161_3716476195594637134_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=7eYTxEQOZpoAX86h6oD&tn=Y3olykOcY6BIVJBJ&_nc_ht=scontent.ftxl2-1.fna&oh=00_AfB5TZ4UlHB7sb_rKjX0zcQcuCh2-5B4FAyjryIKxPz_LA&oe=639FC31C"
        title="Aniversary"
        text="Toys is visually one of the most extraordinary films I've seen, a delight for the eyes, a bright new world.
        <br>
        It takes place within the entirely imaginary world of a giant toy corporation, which springs from a limitless grain field as if there were no other buildings on earth. I've seen, a delight for the eyes, a bright new world. It takes place within the entirely imaginary world of a giant toy corporation, which springs from a limitless grain field as if there were no other buildings on earth."
      />
    </div>
  );
};
