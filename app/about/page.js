import Nav from "../components/Nav";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="pageSection firstPage about">
        <div className="sectionHeader">
          <span>03</span>
          <h1>ABOUT</h1>
        </div>

        <div className="aboutGrid">
          <p>
            CLN LGS is a DJ, artist, and producer focused on creating energy through sound,
            connection, and live performance. His world is industrial, intentional, and built
            around the feeling created when music meets a room.
          </p>
          <img src="/artist-secondary.jpg" alt="CLN LGS portrait" />
        </div>
      </section>
    </main>
  );
}
