// Copyright 2021 The Authors. Subject to the MIT license.

import * as React from "react";
import styles from "./header.module.css";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  // Blurred text behind
  // Drop shadow top 5px
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTitleBlock}>
        <div className={styles.mainTitle}>
          <h1>{title}</h1>
          <div className={styles.subTitle}>
            <h2>{subtitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
