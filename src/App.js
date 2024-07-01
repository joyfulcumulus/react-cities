import { useState } from 'react';
import { cities } from './constants/cities.js';
import CityList from './components/CityList.js';
import ActiveCity from './components/ActiveCity.js';
import './App.css';

function App() {
  const [ selectedSlug, setSelectedSlug ] = useState(cities[0].slug);

  return (
    <div className="container">
      <CityList cities={cities} onClick={setSelectedSlug} />
      <ActiveCity selectedCity={selectedSlug} />
    </div>
  );
}

export default App;
