// import React, { useState } from 'react';
// import axios from './api'; // Ensure you have axios set up in api.js

// const LogFoodDialog = ({ open, onClose, selectedFood }) => {
//   const [servingQty, setServingQty] = useState(1);
//   const [error, setError] = useState(null);

//   const handleLogFood = async () => {

//     console.log('Attempting to log food');

//     const foodLog = {
//       foodName: selectedFood.food_name,
//       servingQty,
//       servingUnit: selectedFood.serving_unit,
//       servingWeightGrams: selectedFood.serving_weight_grams,
//       calories: selectedFood.nf_calories,
//       protein: selectedFood.nf_protein,
//       fat: selectedFood.nf_total_fat,
//       carbs: selectedFood.nf_total_carbohydrate,
//       cholesterol: selectedFood.nf_cholesterol,
//       sodium: selectedFood.nf_sodium,
//       sugars: selectedFood.nf_sugars,
//       potassium: selectedFood.nf_potassium,
//       photo: selectedFood.photo.thumb
//     };

//     try {
//       const response = await axios.post('/foodlog/log', foodLog);
//       console.log('Food logged successfully:', response.data);
//       onClose(); // Close the dialog box after successful logging
//     } catch (error) {
//       console.error('Error logging food:', error);
//       setError('Failed to log food. Please try again.');
//     }
//   };

//   return (
//     <div>
//       {open && (
//         <div>
//           <h3>Log Food</h3>
//           {selectedFood && (
//             <div>
//               <img src={selectedFood.photo.thumb} alt={selectedFood.food_name} />
//               <p>{selectedFood.food_name}</p>
//               <input
//                 type="number"
//                 value={servingQty}
//                 onChange={(e) => setServingQty(e.target.value)}
//                 placeholder="Serving Quantity"
//               />
//               <button onClick={handleLogFood}>Log</button>
//               {error && <p style={{ color: 'red' }}>{error}</p>}
//             </div>
//           )}
//           <button onClick={onClose}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LogFoodDialog;









