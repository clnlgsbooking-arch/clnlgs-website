export default function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="navLogo">
        <img src="/cln_lgs_logo_transparent.png" alt="CLN LGS logo" />
      </a>
      <div className="navLinks">
        <a href="/home">ENTER</a>
        <a href="/music">MUSIC</a>
        <a href="/gallery">GALLERY</a>
        <a href="/about">ABOUT</a>
        <a href="/book">BOOK</a>
      </div>
    </nav>
  );
}
