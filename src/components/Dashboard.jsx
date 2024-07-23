
// import React, { useState } from 'react';
// import SearchBar from '../SearchBar'

// const Dashboard = () => {
//   const [loggedFoods, setLoggedFoods] = useState([]);

//   const handleLogFood = (food) => {
//     setLoggedFoods((prevLoggedFoods) => [...prevLoggedFoods, food]);
//   };

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <SearchBar onLogFood={handleLogFood} />
//       <h2>Logged Foods</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Photo</th>
//             <th>Name</th>
//             <th>Serving Qty</th>
//             <th>Serving Weight</th>
//           </tr>
//         </thead>
//         <tbody>
//           {loggedFoods.map((food, index) => (
//             <tr key={index}>
//               <td>
//                 <img
//                   src={food.photo.thumb}
//                   alt={food.food_name}
//                   style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                 />
//               </td>
//               <td>{food.food_name}</td>
//               <td>{food.servingQty}</td>
//               <td>{food.servingWeight}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;







import React, { useState } from 'react';
import SearchBar from '../SearchBar';

const Dashboard = () => {
  const [loggedFoods, setLoggedFoods] = useState([]);

  const handleLogFood = (food) => {
    setLoggedFoods((prevLoggedFoods) => [...prevLoggedFoods, food]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <SearchBar onLogFood={handleLogFood} />
      <h2>Logged Foods</h2>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Serving Qty</th>
            <th>Serving Weight</th>
          </tr>
        </thead>
        <tbody>
          {loggedFoods.map((food, index) => (
            <tr key={index}>
              <td>
                <img
                  src={food.photo.thumb}
                  alt={food.food_name}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </td>
              <td>{food.food_name}</td>
              <td>{food.servingQty}</td>
              <td>{food.servingWeight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
