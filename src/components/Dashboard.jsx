import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar';
import FoodDialog from '../FoodDialog';
import axios from '../api'; // Ensure you have axios set up in api.js

const Dashboard = () => {
  const [loggedFoods, setLoggedFoods] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState('add'); // add or edit

  useEffect(() => {
    const fetchLoggedFoods = async () => {
      try {
        const response = await axios.get('/foodLog/logs');
        setLoggedFoods(response.data);
      } catch (error) {
        console.error('Error fetching logged foods:', error);
        setError('Failed to fetch logged foods.');
      }
    };

    fetchLoggedFoods();
  }, []);

  const handleLogFood = async (food) => {
    try {
      if (dialogMode === 'edit') {
        await axios.put(`/foodLog/log/${food._id}`, food);
        setLoggedFoods((prev) =>
          prev.map((item) => (item._id === food._id ? food : item))
        );
      } else {
        const response = await axios.post('/foodLog/log', food);
        setLoggedFoods((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.error('Error logging food:', error);
      setError('Failed to log food. Please try again.');
    }
  };

  const handleEditClick = (food) => {
    setSelectedFood(food);
    setDialogMode('edit');
    setIsDialogOpen(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Are you sure you want to delete this food log?')) {
      try {
        await axios.delete(`/foodLog/log/${id}`);
        setLoggedFoods((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        console.error('Error deleting food log:', error);
        setError('Failed to delete food. Please try again.');
      }
    }
  };

  const openDialog = (food) => {
    setSelectedFood(food);
    setDialogMode('add');
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedFood(null); // Clear selected food when closing the dialog
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <SearchBar onLogFood={openDialog} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loggedFoods.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Food Name</th>
              <th>Serving Quantity</th>
              <th>Serving Unit</th>
              <th>Serving Weight (grams)</th>
              <th>Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {loggedFoods.map((food) => (
              <tr key={food._id}>
                <td>
                  <img src={food.photo} alt={food.foodName} width="50" height="50" />
                </td>
                <td>{food.foodName}</td>
                <td>{food.servingQty}</td>
                <td>{food.servingUnit}</td>
                <td>{food.servingWeightGrams}</td>
                <td>
                  <button onClick={() => handleEditClick(food)}>Edit</button>
                  <button onClick={() => handleDeleteClick(food._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isDialogOpen && selectedFood && (
        <FoodDialog
          food={selectedFood}
          onClose={closeDialog}
          onLogFood={handleLogFood}
          mode={dialogMode} // Pass mode to FoodDialog
        />
      )}
    </div>
  );
};

export default Dashboard;

