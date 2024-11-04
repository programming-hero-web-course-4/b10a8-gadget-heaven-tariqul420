import { Outlet } from "react-router-dom"
import NavBar from "../Components/Others/NavBar"
import Footer from "../Components/Others/Footer"
import { ContextProvider } from "../Context/Context"

function Root() {

  return (
    <ContextProvider>
      <div className="min-h-screen flex flex-col overflow-y-scroll">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default Root
