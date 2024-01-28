import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import ReactParallax from "../components/Parallax/ReactParallax"
import News from "../components/News"
import Forums from "../Pages/Forums"
import HighScore from "../Pages/HighScore"
import Membership from "../Pages/Membership"
import WorldMap from "../Pages/WorldMap"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route>
        <Route path="/" element={<MainLayout/>}>
          <Route index element= {
          <>
          <ReactParallax />
          <News />
        </>
        }/>
          <Route path="news" element={<News/>} />
          <Route path="forums" element={<Forums/>} />
          <Route path="highScore" element={<HighScore/>} />
          <Route path="membership" element={<Membership/>} />
          <Route path="worldMap" element={<WorldMap/>} />
        </Route>
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter