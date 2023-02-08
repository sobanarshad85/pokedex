import React from "react";

const TextView = ({ data }) => {
  return (
    <div>
      <div>
        This data is coming from a custom built package named as
        "pokemon-details"
      </div>
      <div
        style={{
          padding: 10,
        }}
      >
        <p>Order: {data.order}</p>
        <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
          Name: {data.name}
        </p>
        <p>Weight: {data.weight}</p>
      </div>
    </div>
  );
};

export default TextView;
