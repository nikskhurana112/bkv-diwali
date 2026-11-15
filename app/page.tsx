import Image from "next/image";
import { centres, meditations } from "./meditation-content";

const eventsUrl = "https://vancouver.brahmakumaris.ca/events";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="masthead">
        <div className="shell masthead-inner">
          <a className="wordmark" href="#main">
            <Image
              src="/brahma-kumaris-vancouver.png"
              width={1200}
              height={184}
              alt="The Brahma Kumaris Vancouver"
              loading="eager"
              unoptimized
            />
          </a>
        </div>
        <div className="navigation">
          <nav className="shell main-nav" aria-label="Main navigation">
            <a href="#meditations">Meditations</a>
            <a href="#centres">Centres</a>
            <a href={eventsUrl}>Events <span aria-hidden="true">↗</span></a>
            <a href="https://vancouver.brahmakumaris.ca/upcoming-courses/">
              Courses <span aria-hidden="true">↗</span>
            </a>
            <a href="https://in8ly.github.io/I-am-light/">
              Diwali Virtue Cards <span aria-hidden="true">↗</span>
            </a>
            <a href="https://vancouver.brahmakumaris.ca/donate-online/">
              Donate <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" aria-labelledby="welcome">
          <div className="hero-banner">
            <Image
              src="/vancouver-wisdom.jpg"
              alt="Vancouver waterfront at sunset with the words Nurturing Inner Wisdom."
              fill
              loading="eager"
              fetchPriority="high"
              unoptimized
            />
          </div>
          <div className="shell hero-inner">
            <Image
              className="hero-emblem"
              src="/vancouver-peace.png"
              width={420}
              height={423}
              alt=""
              unoptimized
            />
            <div className="hero-copy">
              <p className="eyebrow">Raja Yoga meditation</p>
              <h1 id="welcome">A moment of peace.</h1>
              <p className="intro">
                Welcome to the Brahma Kumaris Vancouver. Try a guided meditation
                here (find the playlist below) or at home or join us at a center
                near you. We have a center in Vancouver, Surrey, Abbotsford,
                Victoria, Parksville, and Prince George.
              </p>
              <div className="hero-actions">
                <a className="button" href="#meditations">
                  Explore meditations <span aria-hidden="true">↓</span>
                </a>
                <a className="text-link" href="#centres">
                  Find a centre <span aria-hidden="true">↘</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="library" id="meditations" aria-labelledby="meditation-heading">
          <div className="shell">
            <div className="section-intro">
              <h2 id="meditation-heading">Guided meditations</h2>
              <p>
                Sit comfortably, choose a practice, and follow the guidance.
                Videos open on YouTube.
              </p>
            </div>
            <ul className="collection">
              {meditations.map(({ title, guide, url, playlist }) => (
                <li key={url}>
                  <a className="video" href={url}>
                    <span className={playlist ? "play playlist" : "play"} aria-hidden="true" />
                    <span className="video-copy">
                      <strong>{title}</strong>
                      <small>{guide}</small>
                    </span>
                    <span className="outbound" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="visit" id="centres" aria-labelledby="centres-heading">
          <div className="shell">
            <div className="section-intro">
              <div>
                <h2 id="centres-heading">Find your local centre</h2>
                <p>Explore upcoming workshops, courses, and group meditations.</p>
              </div>
              <a className="button" href={eventsUrl}>
                View upcoming events <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="centre-grid">
              {centres.map(({ name, street, city, phone }) => (
                <article className="centre" key={name}>
                  <h3>{name}</h3>
                  <address>{street}<br />{city}</address>
                  <div className="centre-links">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Brahma Kumaris ${street}, ${city}`)}`}
                      aria-label={`Directions to the ${name} centre`}
                    >
                      Directions <span aria-hidden="true">↗</span>
                    </a>
                    <a
                      href={`tel:+1${phone.replaceAll("-", "")}`}
                      aria-label={`Call the ${name} centre at ${phone}`}
                    >
                      {phone}
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <a className="official" href="https://vancouver.brahmakumaris.ca/contact-us/">
              Official centre directory <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <span>Brahma Kumaris · Vancouver, Surrey &amp; Abbotsford</span>
        <a href="#main">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}
