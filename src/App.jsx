import './App.css'
import { Route, Routes } from "react-router-dom"
import  Home  from "./components/pages/Home/Home"
import  About  from "./components/pages/About/About"
import Contact from './components/pages/Contact/Contact'
import Gallery from './components/pages/Gallery/Gallery'
import SchoolAnthem from './components/pages/SchoolAnthem/SchoolAnthem'

import Admission from './components/pages/Admission/Admission'
import LoginForm from './components/pages/Login/Login'
import MyFooter from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'






function App() {

return (
    <> 
      <div>
        <Navigation />
      </div>  
      <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/schoolAnthem" element={<SchoolAnthem />} />
              <Route path="/aboutUs" element={<About />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
      </div>  
      <div>
        <MyFooter />
      </div>
    </>

  )
}

export default App;
