import styles from "./styles.module.scss"

export const NewsletterSection = () => {
  return (
    <section className={styles.container}>
      <form action="get">
        <h1 className="title1">Conheça nosso aplicativo</h1>
        <input
          className="textP"
          type="text"
          name="Nome"
          id="nome"
          placeholder="Nome"
        />
        <input
          className="textP"
          type="email"
          name="E-mail"
          id="email"
          placeholder="E-mail"
          required
        />
        <button className="btn">Saiba mais</button>
      </form>
    </section>
  )
}
