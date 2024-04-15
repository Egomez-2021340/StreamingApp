import { useRoutes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import routes from "./routes"

export const App = () => {
  return (
    <>
      {element}
      <Toaster position="" />
      <Toaster position="top-right" reverseOrder={true}
      />
    </>
  )
}
