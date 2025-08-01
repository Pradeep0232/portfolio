import './Hero.css';
import heroImage from '../assets/hero.png';

function Hero(){
    return(
        <section className='hero' id='about'>
            <div className='hero-content'>
                <h2>HELLO! I am</h2>
                <h1><span className='highlight'>Pradeep Kumar</span></h1>
                <p className='subtitle'>Interaction UI Designer & Web Developer</p>
                <p className='description'>
                    I craft clean, calm, and human-centered digital experiences—focusing on simplicity, usability, and thoughtful visual storytelling.
                </p>
                {/*<button className='hero-btn'>Know More</button>*/}
            </div>
            <div className='hero-image'>
                <img src={heroImage} alt="Pradeep Illustration" />
            </div>
        </section>
    );
}

export default Hero;