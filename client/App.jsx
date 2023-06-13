import React, { useEffect, useState } from "react";
import Vehicle from "/Users/darri/Code/Projects/ReactMVP/client/components/Vehicle";

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("/api/vehicles")
      .then((res) => res.json())
      .then((vehicles) => {
        setVehicles(vehicles);
      });
  }, []);

  // logic for search request using a fetch (on submit)
 const searchOrders = (event) => {
  event.preventDefault();
  fetch(`/api/orders/${searchQuery}`)
    .then((res) => res.json())
    .then((data) => {
      setOrders(data);
      setSearchResults(data);
      setShowModal(true);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

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

  const SearchModal = ({ results, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Search Results</h2>
          {results.map((order) => (
            <div className="order" key={order.id}>
              <p>Name: {order.name}</p>
              <p>Make: {order.make}</p>
              <p>Model: {order.model}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main>
      <h2 className="title">ReactHurtz</h2>
      {/* inout field to search orders by name */}
      <form onSubmit={searchOrders}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {showModal && (
      <SearchModal results={searchResults} onClose={() => setShowModal(false)} />
    )}
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