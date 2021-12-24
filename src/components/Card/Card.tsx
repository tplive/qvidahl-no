// Copyright 2021 The Authors. Subject to the MIT license.
import * as React from "react";
import julestyle from "./Card.module.css";
import "tailwindcss/tailwind.css";

type CardProps = {
  number: number;
  url: string;
  active: "true" | "false";
};

const Card: React.FC<CardProps> = ({ number, url, active }) => {
  return active === "true" ? (
    <div className={julestyle.active_card}>
      <a href={url}>
        <div key={number}>
          <h1>{number}</h1>
        </div>
      </a>
    </div>
  ) : (
    <div className={julestyle.inactive_card}>
      <div key={number}>
        <h1>{number}</h1>
      </div>
    </div>
  );
};

export default Card;
