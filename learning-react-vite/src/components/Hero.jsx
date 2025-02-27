import '../styles/Navbar.css'
import phoneImage from '../assets/image-mockups.png'
import heroImage from '../assets/bg-intro-desktop.svg'
import '../styles/Hero.css'

export default function Hero () {
    return (
        <>
            <div className="hero-section">
                <div className="hero-section-text">
                    <h1>Next generation digital banking</h1>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, investing, and much more.</p>
                    <button className="btn-request-invite">Request Invite</button>
                </div>
                <div className="hero-image">
                    <img className="hero-background-img" src={heroImage} alt="Hero main image" />
                    <img className="phone-image" src={phoneImage} alt="Phone image" />  
                </div> 
            </div>
        </>
    );
}