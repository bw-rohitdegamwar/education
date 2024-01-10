
import About from "./components/About";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import { Resources } from "./components/Resources";
import SignUp from "./components/SignUp";


export default function App() {
  console.log(window.location)
  let component
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />
      break
    case "/Login":
      component = <Login />
      break
    case "/Resources":
      component = < Resources />
      break
    case "/SignUp":
      component = <SignUp />
      break
    case "/About":
      component = <About />
      break
  }
  return (
    <>
      < Navbar />
      {component}
    </>)

}
