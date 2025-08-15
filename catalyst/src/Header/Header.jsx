import './Header.css';

function Header() {
  return (
    <header className = "header">
      <nav className = "nav-bar" aria-label="Primary">
        <a href="#hero">Home</a>
        <a href="https://e-cell-five.vercel.app" target="_blank" rel="noopener noreferrer">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;