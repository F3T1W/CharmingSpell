import React, { useState, useEffect } from "react";
import styles from './AgeAlert.module.css';

const AgeAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem("hasSeenAgeAlert");
    if (hasSeenAlert === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleTrue = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenAgeAlert", "true");
    localStorage.setItem("userAgeConfirmed", "true");
  };

  const handleFalse = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenAgeAlert", "true");
    localStorage.setItem("userAgeConfirmed", "false");
    window.location.href = "https://google.com";
  };

  if (!isVisible) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <p>Тебе 18 есть?</p>
        <div className={styles.modalButtons}>
          <button
            className={`${styles.modalButton} ${styles.modalButtonYes}`}
            onClick={handleTrue}
          >
            Да
          </button>
          <button
            className={`${styles.modalButton} ${styles.modalButtonNo}`}
            onClick={handleFalse}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeAlert;