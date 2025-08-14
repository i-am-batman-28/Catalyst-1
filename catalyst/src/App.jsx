
import './App.css'
import Catalyst from './CatalystHeading/Catalyst.jsx'
import RegisterButton from './RegisterButton/Register.jsx'
import Header from './Header/Header.jsx'
import LabHero from './AuroraHero/LabHero.jsx'
import EventTimeline from './EventTimeline/EventTimeline.jsx'

function App() {
  return (
    <>
    <div className="aurora-bg-container">
      <div className="bg-grid" />
      {/* Global background stars */}
      <LabHero />
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
      </div>
    </div>
    </>
    
  )
}

export default App
