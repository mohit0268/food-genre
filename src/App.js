import React from "react";
import "./styles.css";

export default function () {
  const foodDb = {
    Indian: [
      { name: "Paneer masala", ratings: "4.5/5" },
      { name: "Samosa", ratings: "4/5" }
    ],
    Chinese: [
      { name: "Noodles", ratings: "3.5/5" },
      { name: "Spring Roll", ratings: "4/5" }
    ],
    Italan: [
      { name: "Pizza", ratings: "4.5/5" },
      { name: "Pasta", ratings: "4/5" }
    ]
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <h1>🥗Delicious Cuisine</h1>
        <p>You can check out this and select your favourite food type</p>
      </div>
    </div>
  );
}
