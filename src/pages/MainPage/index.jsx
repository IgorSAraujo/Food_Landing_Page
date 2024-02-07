import { DefautTemplate } from "../../components/DefautTemplate"
import { BannerSection } from "../../components/MainPageSections/BannerSection"
import { RestaurantsSection } from "../../components/MainPageSections/RestaurantsSection"
import { AboutSection } from "../../components/MainPageSections/AboutSection"
export const MainPage = () => {
  return (
    <>
      <DefautTemplate>
        <BannerSection />
        <RestaurantsSection />
        <AboutSection />
      </DefautTemplate>
    </>
  )
}
