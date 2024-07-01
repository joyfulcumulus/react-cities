import City from './City.js';
import styles from './CityList.module.css';

function CityList( { cities, onClick } ) {

  let cityList = cities.map(city => {
    return <City key={city.name} city={city} onClick={onClick} />
  })
  return(
    <div className={styles.container}>
      <ul>
        {cityList}
      </ul>
    </div>
  )
}

export default CityList;
