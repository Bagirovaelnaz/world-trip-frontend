import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../layout/header/Header"
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import HelpCenter from "../pages/help/HelpCenter"
import Premium from "../pages/premium/Premium"
import Explore from "../pages/explore/Explore"
import Login from "../layout/registiration/login/Login"
import SignUp from "../layout/registiration/sign/SignUp"
import Ai from "../pages/ai/Ai"

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/help" element={<HelpCenter/>} />
        <Route path="/premium" element={<Premium/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/ai" element={<Ai/>} />



    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter