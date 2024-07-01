import styles from './City.module.css';

function City({ city, onClick }) {
  return(
    <li className={styles.li} onClick={() => onClick(city)}>{city.name}</li>
  )
}

export default City;
