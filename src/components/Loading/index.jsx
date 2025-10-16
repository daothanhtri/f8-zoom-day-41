import React from "react";
import styles from "./Loading.module.scss";
import { uiHooks } from "../../store/ui";

const Loading = () => {
  const isLoading = uiHooks.useLoading();

  if (!isLoading) return null;

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
