import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const foodDb = {
    Indian: [
      { name: "paneer butter masala", ratings: "4.5/5" },
      { name: "Samosa", ratings: "4/5" }
    ],
    Chinese: [
      { name: "Noodles", ratings: "3.5/5" },
      { name: "Spring Roll", ratings: "4/5" }
    ],
    Italian: [
      { name: "Pizza", ratings: "4.5/5" },
      { name: "Pasta", ratings: "4/5" }
    ]
  };

  const [selectedFood, setFood] = useState("");
  console.log(foodDb[selectedFood]);

  function eventClickHandler(item) {
    setFood(item);
  }
  var data = Object.keys(foodDb);

  return (
    <div className="App">
      <div className="container-fluid">
        <h1>🥗Delicious Cuisine</h1>
        <p>You can check out this and select your favourite food type</p>
      </div>
      <div>
        {data.map((item) => (
          <button onClick={() => eventClickHandler(item)}>{item}</button>
        ))}
      </div>

      <div>
        <ul>
          {foodDb[selectedFood] &&
            foodDb[selectedFood].map((food) => (
              <li
                key={food.name}
                style={{
                  textAlign: "center",
                  listStyle: "none",
                  padding: "2rem",
                  border: "3px solid #D1D5DB",
                  width: "50%",
                  margin: "1rem 15rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div
                  style={{
                    fontSize: "larger",
                    fontWeight: "bolder",
                    fontSize: "24px"
                  }}
                >
                  {" "}
                  {food.name}{" "}
                </div>
                <div
                  style={{
                    fontSize: "smaller",
                    color: "red",
                    fontSize: "16px"
                  }}
                >
                  {" "}
                  {food.ratings}{" "}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
