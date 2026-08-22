const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        SK.
      </a>
      
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="nav-contact">
        Let's Talk ↗

      </a>
    </nav>
  );
};

export default Navbar;