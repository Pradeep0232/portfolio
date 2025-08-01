import './Header.css';

function Header(){
    return(
        <header className="header">
            <div className="logo">PRADEEP</div>
            <nav className="nav-links">
                <a href="#about">HOME</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    );
}

export default Header;