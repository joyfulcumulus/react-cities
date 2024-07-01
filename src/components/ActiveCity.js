import styles from './ActiveCity.module.css';

function ActiveCity( { selectedCity }) {
  const url = `https://kitt.lewagon.com/placeholder/cities/${selectedCity.slug}`

  return(
    <div className={styles.layout}>
      <h1>{selectedCity.name}</h1>
      <p>{selectedCity.address}</p>
      <div className={styles.imgContainer}>
        <img alt="Representation of the city" src={url} />
      </div>
    </div>
  )
}

export default ActiveCity;
