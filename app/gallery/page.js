import Nav from "../components/Nav";

export default function GalleryPage() {
  return (
    <main>
      <Nav />
      <section className="pageSection firstPage gallerySection">
        <div className="sectionHeader">
          <span>02</span>
          <h1>GALLERY</h1>
        </div>

        <div className="gallery">
          <img className="wide" src="/hero.jpg" alt="CLN LGS gallery image" />
          <img src="/artist-primary.jpg" alt="CLN LGS gallery image" />
          <img src="/artist-secondary.jpg" alt="CLN LGS gallery image" />
        </div>
      </section>
    </main>
  );
}
