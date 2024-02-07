import logoImg from "../../assets/Logo.svg"
import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logoImg} alt="FoodApp" />
    </header>
  )
}
