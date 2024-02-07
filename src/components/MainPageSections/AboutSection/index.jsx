import styles from "./styles.module.scss"
import mobileIcon from "../../../assets/MobileIcon.svg"
export const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerTitle}>
        <img src={mobileIcon} alt="Icone de Celular" />
        <h1 className="title1">
          Sobre o <span className="textS">aplicativo</span>
        </h1>
      </div>
      <div className={styles.containerText}>
        <p className="textP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
          tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non
          imperdiet erat elementum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin maximus tempor ullamcorper. Vivamus porta lorem
          eu quam ultricies, non imperdiet erat elementum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Proin maximus tempor ullamcorper.
          Vivamus porta lorem eu quam ultricies, non imperdiet erat elementum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
          tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non
          imperdiet erat elementum.
        </p>
      </div>
    </section>
  )
}
