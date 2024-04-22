// AddItemForm.js
import React, { useState } from 'react';

function AddItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    const newItem = {
      id: Date.now(),
      name,
      quantity: parseInt(quantity)
    };
    onAdd(newItem);
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddItemForm;
