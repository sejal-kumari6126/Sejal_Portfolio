const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">COMPUTER SCIENCE STUDENT</p>

        <h1>
          Hi, I'm <span>Sejal.</span>
        </h1>

        <h2>
          I build things, learn constantly,
          <br />
          and explore what's possible with technology.
        </h2>

        <p className="hero-description">
          I'm a Computer Science Engineering student at ITER, SOA,
          interested in web development, software engineering, and AI/ML.
          I enjoy turning ideas into practical projects and learning by
          building.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-btn">
            View my work ↗
          </a>

          <a href="#about" className="secondary-btn">
            More about me
          </a>
        </div>
      </div>

      <div className="hero-side">
        <p>BASED IN</p>
        <span>Odisha, India</span>

        <p className="side-space">CURRENTLY</p>
        <span>Building & Learning</span>
      </div>
    </section>
  );
};
export default Hero;






















