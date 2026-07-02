import Nav from "../components/Nav";

const instagram = "https://www.instagram.com/collinlagos?igsh=MTg2dXoydnl4a2txcg%3D%3D&utm_source=qr";
const bookingEmail = "Clnlgs.booking@gmail.com";

export default function BookPage() {
  return (
    <main>
      <Nav />
      <section className="pageSection firstPage book">
        <div className="sectionHeader">
          <span>04</span>
          <h1>BOOK</h1>
        </div>

        <div className="bookBox">
          <p>For clubs, private events, collaborations, and production inquiries.</p>
          <a className="button primary" href={`mailto:${bookingEmail}`}>{bookingEmail}</a>
          <a className="button" href={instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
        </div>
      </section>
    </main>
  );
}
