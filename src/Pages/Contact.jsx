import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export const Contact = () => {
  const position = [52.478954, 13.32937];

  return (
    <div>
      <MapContainer
        className=" h-96"
        center={position}
        zoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={
            new Icon({
              iconAnchor: [16, 32],
              iconUrl:
                "https://cdn0.iconfinder.com/data/icons/twitter-23/512/157_Twitter_Location_Map-64.png",
            })
          }
        >
          <Popup>
            <h3>Bundesplatz Kino</h3> <br />
            Bundesplatz 14.
            <br />
            10715 Berlin
          </Popup>
        </Marker>
      </MapContainer>
      <section className="text-gray-700 body-font relative container px-5 py-24 mx-auto grid grid-cols-12 gap-20">
        <div className="cols col-span-6">
          <div className="flex flex-col  w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className=" leading-relaxed text-base">
              We would like to hear from you.
            </p>
          </div>
          <div className="">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full ">
                <div className="relative ">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="button--primary my-5">Submit</button>
          </div>
        </div>
        <div className=" col col-span-6">
          <h1 className="mb-10">Address </h1>
          <div className="location-details my-5">
            <p>Bundesplatz 14 10715 Berlin</p>
            <p>U + S-Bhf Bundesplatz (U9 - S 41,42,46)</p>
            <p>Bus 248, N9</p>
          </div>
          <div className="contact-no">
            <h3>Telephone</h3>
            <p>Tel.: 030 / 85 40 60 85</p>
            <p>Saal ist barrierefrei</p>
          </div>
          <div className="opeaning-time my-5">
            <h2>Opeaning hour</h2>
          </div>
        </div>
      </section>
    </div>
  );
};
