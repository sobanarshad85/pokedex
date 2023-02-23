import React from "react";

type PokemoneDetailsProps = {
  data: {
    order: number;
    name: string;
    weight: string;
  };
};

const PokemoneDetails = ({ data }: PokemoneDetailsProps) => {
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

export default PokemoneDetails;
