import * as React from "react";
import styles from "./contentcard.module.css";

type ContentCardProps = {
  title: string;
  children?: React.ReactNode;
};

const ContentCard: React.FC<ContentCardProps> = ({ title, children }) => {
  return (
    <div className={styles.cardContainer}>
      <h1>{title}</h1>

      <div>{children}</div>
    </div>
  );
};

export default ContentCard;
