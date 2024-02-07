import styles from "./styles.module.scss"
import { restaurants } from "../../../data/restaurant.js"
import restaurantIcon from "../../../assets/RestaurantIcon.svg"
import { RestaurantList } from "./RestaurantList"

export const RestaurantsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerTitle}>
        <img src={restaurantIcon} alt="Icone Faca e Colher" />
        <h1 className="title1">Restaurantes famosos</h1>
      </div>
      <div className={styles.containerRest}>
        <ul className={styles.containerCards}>
          {restaurants.map((restaurant) => (
            <RestaurantList restaurants={restaurant} />
          ))}
        </ul>
      </div>
    </section>
  )
}
