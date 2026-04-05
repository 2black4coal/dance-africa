import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">

      <section className="about-hero">
        <h1>Dance Africa</h1>
        <p>
          A living expression of culture, rhythm, and a call to power the future of Africa.
        </p>
      </section>

      <section className="about-section">
        <h2>The Spirit of African Dance</h2>
        <p>
          African dance is more than movement — it is language, identity, and history.
          Every step carries meaning, every rhythm tells a story. From traditional tribal
          ceremonies to modern Afrobeats, dance connects generations and preserves culture.
        </p>
      </section>

      <section className="about-section">
        <h2>Instruments & Rhythm</h2>
        <p>
          The heartbeat of African dance lives in its instruments — drums, percussion,
          and handcrafted sound tools that echo across villages and cities. These instruments
          are not just musical tools; they are communicators, calling communities together
          and guiding movement through rhythm and energy.
        </p>
      </section>

      <section className="about-section">
        <h2>African Food & Natural Herbs</h2>
        <p>
          African culture is deeply rooted in nourishment and healing. Traditional foods
          are rich, diverse, and connected to the land. Alongside them, natural herbs have
          been used for generations as medicine — supporting health, balance, and longevity.
          This platform explores both the flavors and the healing wisdom of Africa.
        </p>
      </section>

      <section className="about-section highlight">
        <h2>Light Up Africa — Our Mission</h2>
        <p>
          Dance Africa is more than culture — it is a movement for change.
        </p>

        <p>
          Across Africa, millions still live without reliable electricity. Entire communities,
          schools, and hospitals operate in darkness. This limits education, innovation,
          healthcare, and economic growth.
        </p>

        <p>
          Our mission — Light Up Africa — is a call to action. Through awareness,
          storytelling, and global connection, we aim to bring attention to the urgent
          need for constant and sustainable electrification across every corner of Africa.
        </p>

        <p>
          This platform uses culture — dance, music, food, and tradition — as a bridge
          to the world. By engaging people through beauty and expression, we lead them
          to a deeper understanding of the challenges Africa faces and the solutions
          it deserves.
        </p>

        <p>
          When Africa is fully powered, creativity expands, opportunities grow,
          and futures transform. This is not just a vision — it is a necessity.
        </p>
      </section>

      <section className="about-section">
        <h2>Explore the Experience</h2>
        <p>
          Discover African dance styles, explore instruments, view cultural galleries,
          attend events, and become part of a movement that celebrates culture while
          building the future.
        </p>

        <a href="/dance-styles" className="about-link">
          Visit Our Dance-Styles →
        </a>
      </section>

    </div>
  );
}