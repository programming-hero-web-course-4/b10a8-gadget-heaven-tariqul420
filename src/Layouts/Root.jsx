import { Outlet, useNavigation } from "react-router-dom"
import NavBar from "../Components/Others/NavBar"
import Loading from "../Components/Others/Loading"

function Root() {
  const navigation = useNavigation()

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        {
          navigation.state === "loading" ? <Loading /> : <Outlet />
        }
      </div>
    </div>
  )
}

export default Root
