import { Outlet } from "react-router-dom"
import NavBar from "../Components/Others/NavBar"
import Footer from "../Components/Others/Footer"

function Root() {

  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root
