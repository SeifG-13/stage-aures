import React from "react";

const DollarAmount = ({ value }) => {
  if (value === null) {
    return ""; // Fallback message when the attribute is null
  }

  const formattedValue = Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return <span>{formattedValue}</span>;
};

export default DollarAmount;
