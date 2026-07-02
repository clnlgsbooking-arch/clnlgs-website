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
            <p>
  CLN LGS is a DJ, artist, and producer focused on creating energy through sound,
  connection, and live performance. His world is industrial, intentional, and built
  around the feeling created when music meets a room.
</p>

<p>
  Music has always been more than entertainment. It has always been about chasing
  the same sense of freedom that music gave him growing up. A space where strangers
  become family, judgment fades away, and for a few hours, everyone can simply exist
  together through sound.
</p>

<p>
  Every performance is designed to be more than a set. It's an experience built on
  tension, emotion, and release. Whether it's an intimate club or a packed warehouse,
  the goal is always the same: create a moment people will remember long after the
  music stops.
</p>

<blockquote>
  "When I DJ, my goal isn't just to play music.<br /><br />
  My goal is to help you get lost.<br /><br />
  Get lost in the rhythm.<br /><br />
  Because in a world where we often lack love, music remains the magnet that continues
  to bring us together."
</blockquote>
          </p>
<img src="/about.jpg" alt="CLN LGS portrait" />
              </div>
      </section>
    </main>
  );
}
