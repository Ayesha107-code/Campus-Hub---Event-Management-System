import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Event.module.css'
import axios from '../api/axios'

const categories = ['All', 'Tech', 'Music', 'Sports', 'Art', 'Career', 'Culture']

const Events = () => {
  const navigate = useNavigate()
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // fetch events from backend when page loads
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/events')
        setEvents(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch events')
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  // filter logic
  const filtered = events.filter((event) => {
    const matchSearch = event.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'All' || event.category === category
    return matchSearch && matchCategory
  })

  // show loading
  if (loading) {
    return <div className={styles.container}><p>Loading events...</p></div>
  }

  // show error
  if (error) {
    return <div className={styles.container}><p>{error}</p></div>
  }

  return (
    <div className={styles.container}>

      <h3 className={styles.heading}>All Events</h3>

      <input
        type="text"
        placeholder="Search events"
        value={search}
        className={styles.searchInput}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? styles.btnActive : styles.btnFilter}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.eventsGrid}>
        {filtered.map(event => (
          <div
            className={styles.eventCard}
            key={event._id}
            onClick={() => navigate(`/events/${event._id}`)}
          >
            <div className={styles.cardEmoji}>{event.emoji}</div>
            <div className={styles.cardBody}>
              <span className={styles.cardCategory}>{event.category}</span>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p className={styles.cardDate}>📅 {event.date}</p>
              <p className={styles.cardLocation}>📍 {event.location}</p>
              <button className={styles.cardBtn}>View Details →</button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.noResults}>No events found for "{search}"</p>
      )}

    </div>
  )
}

export default Events