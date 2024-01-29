import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar/NavBar"

const MainLayout = () => {
  return (
    <div className="w-full ">
        <NavBar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default MainLayout