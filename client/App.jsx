import React, { useEffect, useState } from "react";
import Vehicle from "/Users/darri/Code/Projects/ReactMVP/client/components/Vehicle";

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/vehicles")
      .then((res) => res.json())
      .then((vehicles) => {
        setVehicles(vehicles);
      });
  }, []);

  const handleRentClick = (vehicle) => {
    const { make, model } = vehicle;
    const name = prompt("Enter your name:");

    if (name) {
      const newOrder = { name, make, model };

      fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((createdOrder) => {
          setOrders((prevOrders) => [...prevOrders, createdOrder]);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <main>
      <h2 className="title">ReactHurtz</h2>
      <div>
        {vehicles.map((vehicle) => (
          <Vehicle
            key={vehicle.id}
            make={vehicle.make}
            model={vehicle.model}
            imagesrc={vehicle.imagesrc}
            onRentClick={() => handleRentClick(vehicle)}
          />
        ))}
      </div>

      <h2>Orders</h2>
      {orders.map((order) => (
        <div className="order" key={order.id}>
          <p>Name: {order.name}</p>
          <p>Make: {order.make}</p>
          <p>Model: {order.model}</p>
        </div>
      ))}
    </main>
  );
};

export default App;