import { Outlet } from "react-router-dom";
import FooterPage from "../../components/common/footer"
import { HomeHeader } from "../../components/common/header"
import BasicModal from "../../components/modal/basicModal.component";
import { useEffect, useState } from "react";
import HomeLoader from "../../components/loading/homeLoading.component";
const HomePageLayout = ()=>{
          const [loader, setLoading] = useState(true);
          useEffect(() => {
                    const timer = setTimeout(() => {
                      setLoading(false);
                    }, 3000);
                
                    // Clean up the timer when the component unmounts
                    return () => clearTimeout(timer);
                  }, []);
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