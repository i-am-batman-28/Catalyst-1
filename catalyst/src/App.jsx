
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Catalyst from './CatalystHeading/Catalyst.jsx'
import RegisterButton from './RegisterButton/Register.jsx'
import Header from './Header/Header.jsx'
import LabHero from './AuroraHero/LabHero.jsx'
import EventTimeline from './EventTimeline/EventTimeline.jsx'
import LearnMore from './LearnMore/LearnMore.jsx'
import Judges from './Judges/Judges.jsx'
import CornerLogo from './CornerLogo/CornerLogo.jsx'
import Footer from './Footer/Footer.jsx'

function HomePage() {
  return (
    <div className="aurora-bg-container">
      <div className="bg-grid" />
      {/* Global background stars */}
      <LabHero />
      <CornerLogo />
      <div className="main-content">
        <section id="hero" className = "hero">
          <div className="hero-content">
            <Header />
            <Catalyst />
            <RegisterButton />
          </div>
        </section>
        
        <section id="timeline" style={{ marginTop: '16px' }}>
          <EventTimeline />
        </section>
        
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/judges" element={<Judges />} />
      </Routes>
    </Router>
  )
}

export default App
