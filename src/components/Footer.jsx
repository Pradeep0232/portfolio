import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Pradeep Kumar. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/pradeep-kumar-vandana-221892347" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/Pradeep0232" target="_blank" rel="noreferrer">
          GitHub
        </a>
        {/* Add more links if needed */}
      </div>
    </footer>
  );
}

export default Footer;
