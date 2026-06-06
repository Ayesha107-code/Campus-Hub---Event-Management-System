import React from "react";
import styles from "./Notifications.module.css";

const notifications = [
  {
    id: 1,
    title: "Registration Confirmed",
    message: "You have successfully registered for Hackathon 2026",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Event Reminder",
    message: "Spring Concert is tomorrow at Main Auditorium",
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "New Event Added",
    message: "Career Fair has been added. Register now!",
    time: "1 day ago",
  },
];

const Notifications = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Notifications</h1>
        <div className={styles.list}>
          {notifications.map((notification) => (
            <div className={styles.card} key={notification.id}>
              <div className={styles.cardTop}>
                <h4 className={styles.title}>{notification.title}</h4>
                <span className={styles.time}>{notification.time}</span>
              </div>
              <p className={styles.message}>{notification.message} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notifications;
