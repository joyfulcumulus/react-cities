import { cities } from './constants/cities.js';
import CityList from './components/CityList.js';
import ActiveCity from './components/ActiveCity.js';
import './App.css';

function App() {
  return (
    <div className="container">
      <CityList cities={cities} />
      <ActiveCity />
    </div>
  );
}

export default App;
