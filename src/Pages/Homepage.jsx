import { Banner } from "../Components/Banner";
import { CurrenrtshowMini } from "../Components/CurrentshowMini";
import { EventMini } from "../Components/EventMini";

export const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Banner img="http://passage-kinos.de/assets/components/phpthumbof/cache/DasLebenEinTanz_006.32a1639b317698fbb7772cba007210ea.jpg" />
      <div>
        <h1 className="mb-5">Todays show</h1>
        <CurrenrtshowMini
          time="9:00"
          img="https://resizing.flixster.com/2KJzu2ywkjxg7buSN5ZRdOro10E=/300x300/v2/https://flxt.tmsimg.com/assets/p11988714_d_v9_aa.jpg"
          title="Victoria"
          text="Victoria is a 2015 German crime thriller film directed by Sebastian Schipper. ... The film stars Laia Costa and Frederick Lau"
        />
        <CurrenrtshowMini
          time="11:00"
          img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/elizabeth-iemv003884-24-03-2017-16-35-05.jpg"
          title="Elisabeth"
          text="Victoria is a 2015 German crime thriller film directed by Sebastian Schipper. ... The film stars Laia Costa and Frederick Lau"
        />
        <CurrenrtshowMini
          time="9:00"
          img="https://www.denofgeek.com/wp-content/uploads/2022/10/Shuri-and-Black-Panther-2-characters.jpg?resize=768%2C432"
          title="Wakanda forever"
          text="Victoria is a 2015 German crime thriller film directed by Sebastian Schipper. ... The film stars Laia Costa and Frederick Lau"
        />
        <CurrenrtshowMini
          time="9:00"
          img="http://passage-kinos.de/assets/components/phpthumbof/cache/DasLebenEinTanz_006.32a1639b317698fbb7772cba007210ea.jpg"
          title="Das laben eine Tanz "
          text="Victoria is a 2015 German crime thriller film directed by Sebastian Schipper. ... The film stars Laia Costa and Frederick Lau"
        />
        <CurrenrtshowMini
          time="9:00"
          img="https://resizing.flixster.com/2KJzu2ywkjxg7buSN5ZRdOro10E=/300x300/v2/https://flxt.tmsimg.com/assets/p11988714_d_v9_aa.jpg"
          title="Victoria movie"
          text="Victoria is a 2015 German crime thriller film directed by Sebastian Schipper. ... The film stars Laia Costa and Frederick Lau"
        />
      </div>
      <div className="event my-20 ">
        <h1 className="my-3">Todays Events</h1>
        <p className="mb-10">
          At the end of November, the first Christmas markets traditionally open
          their doors and events such as the Christmas Garden at the Berlin
          Botanical Garden are harbingers of the coming Christmas season. At the
          beginning of the month, however, groovy sounds float through the
          capital as Berlin hosts the Jazzfest,
        </p>
        <div className="flex gap-10">
          <EventMini
            img="https://scontent.ftxl2-1.fna.fbcdn.net/v/t39.30808-6/315129813_591041576156711_2254570832593253439_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=2ax9KDtcp84AX8pXyIt&_nc_ht=scontent.ftxl2-1.fna&oh=00_AfDenr8GkBM_SvCN2Sd3rExC-GBdfQLBA7wIyPQPMFUQ_w&oe=639FE85A"
            title="Halleluja Leonard Cohen, a journey, a song"
            text="From Thursday (11/17/22 at 6:00 p.m.) you can see the story of a very special musician through the lens of what is probably his most famous song: HALLELUJAH LEONARD COHEN, A JOURNEY, A SONG. The film not only tells the life story of the well-known musician, but also the journey that made his world hit"
          />
          <EventMini
            img="https://scontent.ftxl2-1.fna.fbcdn.net/v/t39.30808-6/317594681_606003737993828_5040444924380369937_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=o5lmIx_yOMIAX_1kyqv&_nc_ht=scontent.ftxl2-1.fna&oh=00_AfCq1TQJ_Gd3qwFSmyKXQdhLxOwLibnNn-HCpk-3zd-Kqw&oe=63A0BACB"
            title="Der Passfalicher is based on a true story"
            text="From Thursday (11/17/22 at 6:00 p.m.) you can see the story of a very special musician through the lens of what is probably his most famous song: HALLELUJAH LEONARD COHEN, A JOURNEY, A SONG. The film not only tells the life story of the well-known musician, but also the journey that made his world hit"
          />
          <EventMini
            img="https://scontent.ftxl2-1.fna.fbcdn.net/v/t39.30808-6/306986752_554129709847898_2772826935443171386_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=egeOCryVOVQAX-Gki2F&_nc_ht=scontent.ftxl2-1.fna&oh=00_AfCwjAFFsS_prOF5e8w4z6eRs0uxRTUsfTzjM2RE_sAJwQ&oe=63A07077"
            title="European Cinema Day "
            text="From Thursday (11/17/22 at 6:00 p.m.) you can see the story of a very special musician through the lens of what is probably his most famous song: HALLELUJAH LEONARD COHEN, A JOURNEY, A SONG. The film not only tells the life story of the well-known musician, but also the journey that made his world hit"
          />
        </div>
      </div>
    </div>
  );
};
