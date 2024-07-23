import { useState } from "react";
import data from "../Data/data";
import "../styles/Pagination.css";

const Pagination = ({ intemsperPage }) => {
  const [currentpage, setCurrentPage] = useState(1);
  const totalpage = Math.ceil(data.length / intemsperPage);

  const handleNextpage = (Page) => {
    setCurrentPage(Page);
  };
  const getPaginatedData = () => {
    const startIndex = (currentpage - 1) * intemsperPage;
    const endIndex = startIndex + intemsperPage;
    return data.slice(startIndex, endIndex);
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalpage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleNextpage(i)}
          disabled={i === currentpage}
          className="number-btn"
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="card-container">
      <h1 className="App-heading">Current Page is {currentpage}</h1>
      <div className="card">
        {getPaginatedData().map((item) => (
          <div className="card-content" key={item.id}>
            <div className="card-header">
              <h2 className="card-title">User Details</h2>
            </div>
            <div className="card-body">
              <ul className="user-details">
                <li className="user-detail">
                  <strong>Name:</strong> {item.name}
                </li>
                <li className="user-detail">
                  <strong>Address:</strong> {item.city}
                </li>
                <li className="user-detail">
                  <strong>Age:</strong> {item.age}
                </li>
              </ul>
            </div>
            <div className="card-footer"></div>
          </div>
        ))}
      </div>

      <div className="button-render">{renderPageNumbers()}</div>
    </div>
  );
};

export default Pagination;
