// import React, { useState } from 'react';
// import SearchBar from '../SearchBar';

// const Dashboard = () => {
//   const [loggedFoods, setLoggedFoods] = useState([]);

//   const handleLogFood = (food) => {
//     setLoggedFoods([...loggedFoods, food]);
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <SearchBar onLogFood={handleLogFood} />
//       {loggedFoods.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Photo</th>
//               <th>Food Name</th>
//               <th>Serving Quantity</th>
//               <th>Serving Unit</th>
//               <th>Serving Weight (grams)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loggedFoods.map((food, index) => (
//               <tr key={index}>
//                 <td>
//                   <img src={food.photo} alt={food.foodName} width="50" height="50" />
//                 </td>
//                 <td>{food.foodName}</td>
//                 <td>{food.servingQty}</td>
//                 <td>{food.servingUnit}</td>
//                 <td>{food.servingWeightGrams}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Dashboard;



//this worked tara double click wala

import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import FoodDialog from '../FoodDialog'; // Import FoodDialog here
import axios from '../api'; // Ensure you have axios set up in api.js

const Dashboard = () => {
  const [loggedFoods, setLoggedFoods] = useState([]);
  const [error, setError] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogFood = async (food) => {
    try {
      const response = await axios.post('/foodlog/log', food);
      console.log('Food logged successfully:', response.data);
      setLoggedFoods([...loggedFoods, response.data]);
    } catch (error) {
      console.error('Error logging food:', error);
      setError('Failed to log food. Please try again.');
    }
  };

  const openDialog = (food) => {
    setSelectedFood(food);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
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
            </tr>
          </thead>
          <tbody>
            {loggedFoods.map((food, index) => (
              <tr key={index}>
                <td>
                  <img src={food.photo} alt={food.foodName} width="50" height="50" />
                </td>
                <td>{food.foodName}</td>
                <td>{food.servingQty}</td>
                <td>{food.servingUnit}</td>
                <td>{food.servingWeightGrams}</td>
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
        />
      )}
    </div>
  );
};

export default Dashboard;









