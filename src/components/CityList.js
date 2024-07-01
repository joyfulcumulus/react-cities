import City from './City.js';

function CityList( { cities } ) {

  let cityList = cities.map(city => {
    return <City key={city.name} name={city.name} />
  })
  return(
    <div>
      <ul>
        {cityList}
      </ul>
    </div>
  )
}

export default CityList;
