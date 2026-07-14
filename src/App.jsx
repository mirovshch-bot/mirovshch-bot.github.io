import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import FrontSection from "./components/FrontSection"
import Portfolio from "./components/Portfolio"

const App = () => {
  return (
    <div className="home">
      <FrontSection></FrontSection>
      <Portfolio></Portfolio>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  )
}

export default App