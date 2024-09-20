import { Outlet } from "react-router-dom";
import FooterPage from "../../components/common/footer"
import { HomeHeader } from "../../components/common/header"
import BasicModal from "../../components/modal/basicModal.component";
import { useState } from "react";
import HomeLoader from "../../components/loading/homeLoading.component";
const HomePageLayout = ()=>{
          const [loader, setLoading] = useState(true);
          setTimeout(()=>{
                    setLoading((data) => !data);
          }, 3000)
          return(
                    <>
                    {
                    loader ? 
                    <HomeLoader /> : 
                    <>
                    <HomeHeader />
                    <Outlet />
                    <FooterPage />
                    <BasicModal />
                    </>
                    }
                    </>
          )
}


export default HomePageLayout;