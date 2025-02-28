import logoImage from '../assets/logo.svg'
import facebookIcon from '../assets/icon-facebook.svg'
import youtubeIcon from '../assets/icon-youtube.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import pinterestIcon from '../assets/icon-pinterest.svg'
import instagramIcon from '../assets/icon-instagram.svg'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer () {
    return (
        <>
            <div className="footer-root">
                <div className="footer-d1">
                    <div className="footer-logo-social">
                    <img className="footer-logo" src={logoImage} alt="Easybank logo image" />
                    <div className="footer-social-network">
                        <img className="social-icon" src={facebookIcon} alt="Facebook icon" />
                        <img className="social-icon" src={youtubeIcon} alt="Youtube icon" />
                        <img className="social-icon" src={twitterIcon} alt="Twitter icon" />
                        <img className="social-icon" src={pinterestIcon} alt="Pinterest icon" />
                        <img className="social-icon" src={instagramIcon} alt="Instagram icon" />
                    </div>
                </div>
                <div className="footer-nav">
                    <Link className="footer-link">About Us</Link>
                    <Link className="footer-link">Contact</Link>
                    <Link className="footer-link">Blog</Link>
                </div>
                <div className="footer-nav">
                    <Link className="footer-link">Careers</Link>
                    <Link className="footer-link">Support</Link>
                    <Link className="footer-link">Privacy Policy</Link>
                </div>
            </div>

            <div className="footer-req-invite">
                <div className="footer-req">
                    <button>Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">Djina Cizmas</a>.
                </div>
            </div>
            </div>
        </>
    );
}