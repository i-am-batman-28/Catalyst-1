import './Judges.css'

function Judges() {
  const judges = [
    {
      id: 1,
      name: "Rahul Lakhmani",
      image: "/ca.jpeg",
      title: "Founder and CEO",
      company: "Skiify Solutions",
      description: "An IIT Bombay alumnus and entrepreneur who has led over 500 inspirational lectures across reputed institutions including IITs and IIMs. Winner of ISLQ Award in Gold Category by BID Convention Paris and recently awarded 'Leading Innovative Pioneer' by Federation for World Academics. He actively mentors startups and has been part of NIRF validation panel for Innovation rankings.",
      expertise: ["Startup Mentorship", "AI/ML & Blockchain", "Public Speaking", "Innovation Strategy", "Education Technology"]
    },
    {
      id: 2,
      name: "Prof. Dr. Hrishikesh Venkataraman", 
      image: "/hr.jpg",
      title: "Professor & Dean - Academics and Research & Development",
      company: "IIIT Sri City",
      description: "Leading expert in smart transportation research, particularly V2V communication, ML techniques and real-time recommendation systems towards autonomous driving. Has 2 Government of India funded projects and active industry collaboration with German Automotive firms. Also associated with Tech-Venture Startup@INVENT DCU, Ireland.",
      expertise: ["Smart Transportation", "V2V Communication", "Machine Learning", "Autonomous Driving", "Research & Development"]
    }
  ];

  return (
    <div className="judges-container">
      <div className="judges-hero">
        <h1 className="judges-title">Meet Our Esteemed Judges</h1>
        <p className="judges-subtitle">
          Industry leaders and experts who will evaluate and mentor our participants
        </p>
      </div>
      
      <div className="judges-grid">
        {judges.map((judge) => (
          <div key={judge.id} className="judge-card">
            <div className="judge-image-container">
              <img 
                src={judge.image} 
                alt={judge.name}
                className="judge-image"
              />
            </div>
            
            <div className="judge-content">
              <h2 className="judge-name">{judge.name}</h2>
              <h3 className="judge-title">{judge.title}</h3>
              <p className="judge-company">{judge.company}</p>
              
              <p className="judge-description">
                {judge.description}
              </p>
              
              <div className="judge-expertise">
                <h4>Areas of Expertise:</h4>
                <div className="expertise-tags">
                  {judge.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="judges-footer">
        <a href="/" className="back-home-btn">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

export default Judges;
