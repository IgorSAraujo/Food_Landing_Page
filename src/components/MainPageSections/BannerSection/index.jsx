import bannerImg from "../../../assets/BannerFood.png"
import styles from "./styles.module.scss"

export const BannerSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerInfos}>
        <h1 className="title1">
          Descrubra o melhor <span className="textS">aplicativo de comida</span>
        </h1>
        <p className="textP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
          tempor ullamcorper. Vivamus porta lorem eu quam ultricies, non
          imperdiet erat elementum.
        </p>
        <button className="btn">Saiba mais</button>
      </div>
      <div className={styles.containerBanner}>
        <img src={bannerImg} alt="Fotos de comida dos Restaurantes" />
      </div>
    </section>
  )
}
