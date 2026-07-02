import Nav from "../components/Nav";

const spotifyTrack = "https://open.spotify.com/artist/5ZJb2JltYTZKylCFi9Z1eS?si=FdWl8KEcTUazpMY1zGy4dQ";
const spotifyEmbed = "https://open.spotify.com/embed/track/2YmWdRQGL79zLpCOUU1ZTf";

export default function MusicPage() {
  return (
    <main>
      <Nav />
      <section className="pageSection firstPage">
        <div className="sectionHeader">
          <span>01</span>
          <h1>LATEST RELEASE</h1>
        </div>

        <div className="musicGrid">
          <div className="musicText">
            <p>
              Current release from CLN LGS. Stream directly here, then open the track on your preferred platform.
            </p>
            <div className="platforms">
              <a href={spotifyTrack} target="_blank" rel="noreferrer">SPOTIFY</a>
              <a href="https://music.apple.com/us/artist/cln-lgs/1882471324" target="_blank" rel="noreferrer">APPLE MUSIC</a>
              <a href="https://on.soundcloud.com/OzAWPMsbrHrTDdgEJo" target="_blank" rel="noreferrer">SOUNDCLOUD</a>
            </div>
          </div>

          <iframe
            className="spotify"
            title="CLN LGS latest release on Spotify"
            src={spotifyEmbed}
            width="100%"
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
