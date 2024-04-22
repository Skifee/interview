// App.js
import React, { useState } from 'react';
import Table from './components/table';
import AddItemForm from './components/additemform';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <Table items={items} onDelete={deleteItem} />
      <AddItemForm onAdd={addItem} />
    </div>
  );
}

export default App;
