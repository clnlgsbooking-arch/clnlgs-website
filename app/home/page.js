import Nav from "../components/Nav";

const spotifyTrack = "https://open.spotify.com/artist/5ZJb2JltYTZKylCFi9Z1eS?si=FdWl8KEcTUazpMY1zGy4dQ";
const bookingEmail = "Clnlgs.booking@gmail.com";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <section className="home">
        <div className="homeImage">
          <img src="/hero.jpg" alt="CLN LGS" />
        </div>
        <div className="homeOverlay">
          <p className="statement">
            {"It's not just about playing music."} <br />
            {"It's about creating energy."}
          </p>
          <div className="buttonRow">
            <a className="button primary" href={spotifyTrack} target="_blank" rel="noreferrer">LISTEN</a>
            <a className="button" href={`mailto:${bookingEmail}`}>BOOK</a>
          </div>
        </div>
      </section>
    </main>
  );
}
