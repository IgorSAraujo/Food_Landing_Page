import { DefautTemplate } from "../../components/DefautTemplate"
import { BannerSection } from "../../components/MainPageSections/BannerSection"
import { RestaurantsSection } from "../../components/MainPageSections/RestaurantsSection"
import { AboutSection } from "../../components/MainPageSections/AboutSection"
import { NewsletterSection } from "../../components/MainPageSections/NewsletterSection"

export const MainPage = () => {
  return (
    <>
      <DefautTemplate>
        <BannerSection />
        <RestaurantsSection />
        <AboutSection />
        <NewsletterSection />
      </DefautTemplate>
    </>
  )
}
