import { Outlet } from "react-router-dom";
import FooterPage from "../../components/common/footer"
import { HomeHeader } from "../../components/common/header"

const HomePageLayout = ()=>{
          return(
                    <>
                    <HomeHeader />
                    <Outlet />
                    <FooterPage />
                    </>
          )
}


export default HomePageLayout;