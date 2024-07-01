import { useState } from 'react';
import { cities } from './constants/cities.js';
import CityList from './components/CityList.js';
import ActiveCity from './components/ActiveCity.js';
import './App.css';

function App() {
  const [ selectedCity, setSelectedCity ] = useState(cities[0]);

  return (
    <div className="container">
      <CityList cities={cities} onClick={setSelectedCity} />
      <ActiveCity selectedCity={selectedCity} />
    </div>
  );
}

export default App;
