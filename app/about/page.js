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
            Raised in Orlando in a proud Latino household, CLN LGS found his escape through music long before he ever stepped behind a pair of decks. As he grew into his identity within the LGBTQ+ community, the dance floor became more than a place to dance. It became a place where differences disappeared, walls came down, and everyone belonged.

Those experiences continue to shape every performance. Drawing from industrial textures, hypnotic rhythms, and relentless energy, CLN LGS creates sets that invite people to leave the outside world behind and surrender to the moment. For him, DJing has never been about simply playing tracks. It's about creating the same sense of freedom that music gave him growing up. A space where strangers become family, judgment fades away, and for a few hours, everyone can simply exist together through sound.

"When I DJ, my goal isn't just to play music. My goal is to help you get lost. Get lost in the rhythm. Because in a world where we often lack love, music remains the magnet that continues to pull us together."*

— CLN LGS

          </p>
<img src="/about.jpg" alt="CLN LGS portrait" />
              </div>
      </section>
    </main>
  );
}
