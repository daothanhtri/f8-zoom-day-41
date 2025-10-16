import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/products");
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.welcomeTitle}>Welcome to My Store!</h1>
      <button
        onClick={handleNavigateToProducts}
        className={styles.shopNowButton}
      >
        Shop Now
      </button>
    </div>
  );
};

export default Home;
