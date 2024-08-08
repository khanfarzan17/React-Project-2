import { useState } from "react";
import initialItems from "../Data/data";
import "../styles/Search.css";
import { MdDelete } from "react-icons/md";

const Search = () => {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleChange}
          aria-label="Search products"
        />
        <p className="product-number">
          Showing {filteredItems.length} of {items.length} products
        </p>
      </div>

      <div className="product-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="product-item">
            <h2>{item.name}</h2>
            <img
              src={item.image}
              alt={`Image of ${item.name}`}
              className="product-image"
            />
            <p>Price: ₹{item.price}</p>
            <p>Category: {item.category}</p>
            <div>
              <h3>Specifications:</h3>
              <ul>
                {Object.entries(item.specifications).map(([key, value]) => (
                  <li key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Features:</h3>
              <ul>
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="delete-button-container">
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-btn"
                aria-label={`Delete ${item.name}`}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
        {!filteredItems.length && <p>No items found matching your search.</p>}
      </div>
    </>
  );
};

export default Search;
