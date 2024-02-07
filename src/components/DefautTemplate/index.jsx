import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefautTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
