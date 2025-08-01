import { useState } from 'react';
import './Header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="logo">PRADEEP</div>

            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
                <span className={isOpen ? 'bar open' : 'bar'}></span>
            </div>

            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#about" onClick={() => setIsOpen(false)}>HOME</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
            </nav>
        </header>
    );
}

export default Header;
