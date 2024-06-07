import React, { useState } from 'react';
import axios from 'axios';
import './Tracker.css'; // Import the CSS file for styles
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Navbar2 from '../Component/Navbar2';
import Side_bar from '../Component/Side_bar';

const CaloriesCalculator = () => {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);
  const [progress, setProgress] = useState(0);

  const [totalProtein, setTotalProtein] = useState(0);
  const [totalFat, setTotalFat] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);

  const handleCalculateCalories = async () => {
    try {
      if (!foodName || !quantity) {
        setError('Please enter both food name and quantity');
        return;
      }

      const response = await axios.post('http://localhost:3003/cal', {
        foodName: foodName.toLowerCase(),
        quantity: parseInt(quantity)
      });

      const { calories, protein, fat, carbs } = response.data;

      setCalories(calories);
      setTotalCalories(prevTotal => {
        const newTotal = prevTotal + calories;
        setProgress(newTotal / 2000 * 100); // Assuming 2000 kcal as daily limit
        return newTotal;
      });

      setTotalProtein(prevTotall => prevTotall + protein);
      setTotalFat(prevTotal => prevTotal + fat);
      setTotalCarbs(prevTotal => prevTotal + carbs);

      setError('');
    } catch (error) {
      setError('Error calculating calories');
      console.error('Error fetching calories:', error);
    }
  };

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>          
    <Navbar2 />
    <Side_bar/>
    <div className='parent'>
    <div className='back'>
      <div className="container">
        <h1>Calories Calculator</h1>
        <div className="horizontal-container">
          <div className='form-group'>
            <label htmlFor="foodName">Name:</label>
            <input
              type="text"
              id="foodName"
              value={foodName}
              onChange={handleFoodNameChange}
              placeholder="Enter food name..."
            />
          </div>
          <div className='form-group'>
            <label htmlFor="quantity">Quantity(100mg):</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              placeholder="Enter quantity..."
            />
          </div>
          <button className='butt' onClick={handleCalculateCalories}>Calculate & add</button>
        </div>
        {calories !== null && (
          <p className="result">
            Total Calories in {quantity * 100}mg {foodName}: {calories} kcal
          </p>
        )}
        {error && <p className="error">{error}</p>}
      </div>
      <div className='cirbar'>
        <div className='circlebar'>
          <div style={{ width: '200px', margin: 'auto' }}>
            <CircularProgressbar
              value={progress}
              text={`${totalCalories} kcal`}
              strokeWidth={12}
              styles={{
                path: { stroke: '#006769' },
                text: { fill: '#006769', fontSize: '10px' },
              }}
            />
            <div className='hori'>
            <div className='container1'>PROTEIN
              <div>{totalProtein}g</div>
            </div>
            <div className='container2'>FAT
              <div>{totalFat}g</div>
            </div>
            <div className='container3'>CARBS
              <div>{totalCarbs}g</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};


export default CaloriesCalculator;