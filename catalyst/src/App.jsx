
import './App.css'
import Catalyst from './CatalystHeading/Catalyst.jsx'
import RegisterButton from './RegisterButton/Register.jsx'
import Header from './Header/Header.jsx'
import LabHero from './AuroraHero/LabHero.jsx'
import Timeline from './AboutEvent/Pages/TimeLine.jsx'

function App() {
  return (
    <>
    <div className="aurora-bg-container">
      <div className="bg-grid" />
      <div className="main-content">
        <section id="hero" className = "hero">
          <LabHero />
          <div className="hero-content">
            <Header />
            <Catalyst />
            <RegisterButton />
          </div>
        </section>
        
        <section id="timeline" className = "TimeLine" style={{ marginTop: '16px' }}>
          <div className='TimeLineElement'>
            <Timeline />
          </div>
        </section>
      </div>
    </div>
    </>
    
  )
}

export default App
