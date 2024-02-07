import { DefautTemplate } from "../../components/DefautTemplate"
import { BannerSection } from "../../components/MainPageSections/BannerSection"
import { RestaurantsSection } from "../../components/MainPageSections/RestaurantsSection"
export const MainPage = () => {
  return (
    <>
      <DefautTemplate>
        <BannerSection />
        <RestaurantsSection />
      </DefautTemplate>
    </>
  )
}
