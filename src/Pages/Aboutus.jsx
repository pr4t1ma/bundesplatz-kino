import { TextwithImage } from "../Components/TextwithImage";

export const Aboutus = () => {
  const aboutText = `<p> On Sunday, October 23rd, our cinema celebrated its 11th anniversary since it reopened in 2011. We would like to thank our guests for their visit and hope that you will continue to be loyal to us - even in times that are not quite as easy as at the moment.</p>
        <p> We will continue to try to offer you a special program in the future.
        It's great that. We were recently awarded another program prize by the BKM. The Minister of State for Culture and Media, Claudia Roth, presented us with the certificate for the outstanding annual film program 2021.We are pleased that we are among the best cinemas .</p>`;

  const guestText = `<p>
        One of our favorite places on the Bundesplatz has rightly received an award: in Potsdam, the operators of the Bundesplatz cinema, Peter Latta and Martin Erlenmaier, accepted the federal award for an excellent program selection.
        </p>
        <p>
        Minister of State for Culture Monika Grütters handed over the certificate and the prize money - in the cinema Latta and Erlenmeier were still beaming about the deserved honor days later.
        </p>`;
  return (
    <div className="container mx-auto">
      <TextwithImage
        img="https://www.berlinale.de/media/bilder/2013/boulevard_2013/09.2./090213_pk_0003_ORG.jpg"
        title="About us"
        text={aboutText}
      />
      <TextwithImage
        img=" http://www.initiative-bundesplatz.de/wp-content/uploads/2017/10/20171023_185919-1.jpg "
        title="Our special gast"
        text={guestText}
        reverse
      />
    </div>
  );
};
