import React from "react";
import { Link } from "react-router-dom";

const CustomerCard = ({ item }) => {
  return (
    <Link to={`/customer/${item.id}`}>
      <div
        key={item.id}
        style={{ backgroundColor: "#466d70", padding: "5px" }}
      >
        <img src={item.image}></img>
        <h3 style={{ color: "white" }}>{item.name}</h3>
        <h3 style={{ color: "white" }}>{item.gender}</h3>
        <button
          style={{
            backgroundColor:
              item.status === "Alive"
                ? "#03fc4e"
                : item.status === "Dead"
                ? "#fc034e"
                : "#f8fc03",
                padding : "5px",
                border : "1px solid black",
                borderRadius : "5px",
          }}
        >
          {item.status}
        </button>
      </div>
    </Link>
  );
};

export default CustomerCard;
