import './Register.css'

function RegisterButton() {
  const openLearnMore = () => {
    window.open('/learn-more', '_blank');
  };

  return (
    <>
      <div className="register-btn-row">
        <a href="https://forms.gle/gtR6BaHX4zwGVMR59" target="_blank" rel="noopener noreferrer" className="register-button">Register</a>
        <button onClick={openLearnMore} className="register-button">Learn More</button>
      </div>
    </>
  );
}

export default RegisterButton;