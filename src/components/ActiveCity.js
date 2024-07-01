function ActiveCity( { selectedCity }) {
  const url = `https://kitt.lewagon.com/placeholder/cities/${selectedCity}`

  return(
    <div>
      <h1>{selectedCity.name}</h1>
      <p>{selectedCity.address}</p>
      <img alt="Representation of the city" src={url} />
    </div>
  )
}

export default ActiveCity;
