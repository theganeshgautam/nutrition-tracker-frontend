import React, { useState } from 'react';

import './FoodDialog.css'


const FoodDialog = ({ food, onClose, onLogFood }) => {
  const [servingQty, setServingQty] = useState('');
  const [servingWeight, setServingWeight] = useState('');

  const handleLogFood = () => {
    if (servingQty || servingWeight) {
      const loggedFood = {
        ...food,
        servingQty: servingQty || 1,
        servingWeight: servingWeight || food.serving_weight_grams,
      };
      onLogFood(loggedFood);
      onClose();
    } else {
      alert('Please enter serving quantity or serving weight.');
    }
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h3>{food.food_name}</h3>
        <img src={food.photo.thumb} alt={food.food_name} />
        <div>
          <label>Serving Quantity:</label>
          <input
            type="number"
            value={servingQty}
            onChange={(e) => setServingQty(e.target.value)}
          />
        </div>
        <div>
          <label>Serving Weight (grams):</label>
          <input
            type="number"
            value={servingWeight}
            onChange={(e) => setServingWeight(e.target.value)}
          />
        </div>
        <button onClick={handleLogFood}>Log</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default FoodDialog;


