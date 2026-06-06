import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Hackathon 2026",
    category: "Tech",
    date: "May 20",
    emoji: "💻",
  },
  {
    id: 2,
    title: "Spring Concert",
    category: "Music",
    date: "May 24",
    emoji: "🎵",
  },
  {
    id: 3,
    title: "Sports Finals",
    category: "Sports",
    date: "Jun 1",
    emoji: "🏆",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Discover. Connect. Celebrate.</h1>
        <p className={styles.heroSub}>
          Find exciting events and make unforgettable memories on campus.
        </p>
        <div className={styles.heroButtons}>
          <button
            className={styles.btnPrimary}
            onClick={() => navigate("/events")}
          >
            Explore Events
          </button>
          <button
            className={styles.btnOutline}
            onClick={() => navigate("/signup")}
          >
            Join Campus Hub
          </button>
        </div>
      </section>

      {/* Featured Events */}
      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Events</h2>
          <button
            className={styles.viewAll}
            onClick={() => navigate("/events")}
          >
            View all →
          </button>
        </div>

        <div className={styles.eventsGrid}>
          {events.map((event) => (
            <div
              className={styles.eventCard}
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
            >
              <div className={styles.cardEmoji}>{event.emoji}</div>
              <div className={styles.cardBody}>
                <span className={styles.cardCategory}>{event.category}</span>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDate}>📅 {event.date}</p>
                <button className={styles.cardBtn}>Register →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Are you an organizer?</h2>
        <p className={styles.ctaSub}>
          Create and manage your campus events easily.
        </p>
        <button className={styles.ctaBtn} onClick={() => navigate("/signup")}>
          Get Started →
        </button>
      </section>
    </div>
  );
};

export default Home;
