import HomeMenu from "./components/home-menu"
import HomePageFooter from "./components/footer"
import { Outlet } from "react-router-dom"

const HomePageLayout =() => {
    return (
        <>
        <HomeMenu/>
        <Outlet/>
        <HomePageFooter/>
        
        </>
    )
}

export default HomePageLayout;