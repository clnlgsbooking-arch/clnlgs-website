export default function Landing() {
  return (
    <main>
      <section className="landing">
        <div className="grain" />
        <img className="landingLogo fadeOne" src="/cln_lgs_logo_transparent.png" alt="CLN LGS" />
        <div className="portalNav fadeTwo">
          <a href="/home">ENTER</a>
          <a href="/music">MUSIC</a>
          <a href="/gallery">GALLERY</a>
          <a href="/about">ABOUT</a>
          <a href="/book">BOOK</a>
        </div>
      </section>
    </main>
  );
}
