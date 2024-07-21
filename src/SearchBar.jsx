import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      try {
        const response = await axios.get(`http://localhost:5000/food/search/${e.target.value}`);
        setResults(response.data.common);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for food..."
        value={query}
        onChange={handleSearch}
        style={{ width: '300px', padding: '10px', marginBottom: '10px' }}
      />
      {results.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: '0', maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', borderRadius: '4px' }}>
          {results.map((item) => (
            <li key={item.tag_id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
              {item.food_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;















// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);

//   const handleSearch = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(`http://localhost:5000/food/search/${query}`);
//       setResults(response.data);
//     } catch (error) {
//       console.error('Error searching for food items:', error);
//     }
//   };

//   const handleSelectFood = (food) => {
//     setSelectedFood(food);
//   };

//   const handleAddFoodLog = async () => {
//     if (!selectedFood) {
//       alert('Please select a food item.');
//       return;
//     }

//     try {
//       const token = localStorage.getItem('token'); // Assume token is stored in localStorage
//       await axios.post(
//         'http://localhost:5000/food/logs',
//         { food: selectedFood },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       alert('Food item added to log successfully!');
//       setSelectedFood(null); // Clear the selection
//       setQuery('');
//       setResults([]);
//     } catch (error) {
//       console.error('Error adding food item to log:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for food items..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {results.map((item, index) => (
//           <li key={index} onClick={() => handleSelectFood(item)}>
//             {item.food_name}
//           </li>
//         ))}
//       </ul>
//       {selectedFood && (
//         <div>
//           <h3>Selected Food: {selectedFood.food_name}</h3>
//           <button onClick={handleAddFoodLog}>Add to Food Log</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
