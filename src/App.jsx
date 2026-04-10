import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import Exploration from './pages/Exploration'
import Innovation from './pages/Innovation'
import Network from './pages/Network'
import DeployMission from './pages/DeployMission'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#081423] text-[#d7e3f9] flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/exploration" element={<Exploration />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/network" element={<Network />} />
            <Route path="/deploy" element={<DeployMission />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
