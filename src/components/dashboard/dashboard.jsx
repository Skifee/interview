// Dashboard.js
import React, { useState } from 'react'; 
import StockList from '';
import AddStockForm from './addStockForm/';

function Dashboard() {
  const [stocks, setStocks] = useState([]);

  // Function to add a new stock
  const addStock = (newStock) => {
    setStocks([...stocks, newStock]);
  };

  // Function to delete a stock
  const deleteStock = (id) => {
    setStocks(stocks.filter(stock => stock.id !== id));
  };

  // Function to update the status of a stock
  const updateStockStatus = (id, newStatus) => {
    setStocks(stocks.map(stock => {
      if (stock.id === id) {
        return { ...stock, status: newStatus };
      }
      return stock;
    }));
  };

  return (
    <div>
      <h2>Stock List</h2>
      <StockList stocks={stocks} onDelete={deleteStock} onUpdateStatus={updateStockStatus} />
      <h2>Add New Stock</h2>
      <AddStockForm onAdd={addStock} />
    </div>
  );
}

export default Dashboard;
