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
          <img src="/artist-primary.jpg" alt="CLN LGS gallery image" />
  <img src="/artist-secondary.jpg" alt="CLN LGS gallery image" />
    <img src="/artist-third.jpg" alt="CLN LGS gallery image" />
  <img src="/artist-fourth.jpg" alt="CLN LGS gallery image" />
  <img src="/artist-fifth.jpg" alt="CLN LGS gallery image" />
  <img src="/artist-sixth.jpg" alt="CLN LGS gallery image" />
        </div>
      </section>
    </main>
  );
}
