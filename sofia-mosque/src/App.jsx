import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Tourists from "./pages/tourists/Tourists";
import IslamShortly from "./pages/tourists/islam-shortly/IslamShortly";
import Oneness from "./pages/tourists/islam-shortly/onenes-of-God/OnenessOfGod";
import AboutAllah from "./pages/tourists/islam-shortly/about-Allah/AboutAllah";
import PillarsOfFaith from "./pages/tourists/islam-shortly/pillars-of-faith/PillarsOfFaith";
import PanoView from "./pages/panoview/PanoView";
import Footer from "./components/footer/Footer";
import './styles.css';
import Contacts from "./pages/contact/Contact";
import Explorers from "./pages/explorers/Explorers";
import Muslims from "./pages/muslims/Muslims";
import PillarsOfIslam from "./pages/tourists/islam-shortly/pillars-of-islam/PillarsOfIslam";
import Test from "./pages/test/Test";




function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tourists' element={<Tourists />} />
          <Route path='/tourists/islam-shortly' element={<IslamShortly />} />
          <Route path='/tourists/islam-shortly/oneness-of-God' element={<Oneness />} />
          <Route path='/tourists/islam-shortly/about-Allah' element={<AboutAllah />} />
          <Route path='/tourists/islam-shortly/pillars-of-faith' element={<PillarsOfFaith />} />
          <Route path='/tourists/islam-shortly/pillars-of-islam' element={<PillarsOfIslam />} />
          <Route path="/explorers" element={<Explorers />} />
          <Route path="/test" element={<Test />} />
          <Route path="/muslims" element={<Muslims />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/360" element={<PanoView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
