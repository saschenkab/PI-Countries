import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByPopulationAction, orderAction } from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("");

  const handleOrderByPopulation = (event, string) => {
    event.preventDefault();
    dispatch(orderByPopulationAction(string));
    setOrder(event.target);
  };

  const handleOrder = (event, string) => {
    event.preventDefault();
    dispatch(orderAction(string));
    setOrder(event.target.value);
  };

  console.log();

  return (
    <div>
      <label>Order By:</label>
      <button onClick={(event) => handleOrder(event, "asc")}>A-Z</button>
      <button onClick={(event) => handleOrder(event, "desc")}>Z-A</button>
      <label>Order By Population:</label>
      <button onClick={(event) => handleOrderByPopulation(event, "asc")}>
        Most Populated
      </button>
      <button onClick={(event) => handleOrderByPopulation(event, "desc")}>
        Less Populated
      </button>
    </div>
  );
};

export default Order;
