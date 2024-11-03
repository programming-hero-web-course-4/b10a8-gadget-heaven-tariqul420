import { Outlet, useNavigation } from "react-router-dom"
import NavBar from "../Components/Others/NavBar"
import Loading from "../Components/Others/Loading"

function Root() {
  const navigation = useNavigation()

  return (
    <>
      <NavBar />
      <div>
        {
          navigation.state === "loading" ? <Loading /> : <Outlet />
        }
      </div>
    </>
  )
}

export default Root
