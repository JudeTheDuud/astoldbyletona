import Faq from "./components/Faq"
import ScrollToTop from "./components/ScrollToTop"
import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  

  return (
      <div className="App">
        <Router>
          <ScrollToTop/>
          <Routes>
            <Route path = '/' element = {<LandingPage/>}/>
            <Route path = '/faq' element = {<Faq/>}/>
          </Routes>
        </Router>
      </div>
      
  )
}

export default App
