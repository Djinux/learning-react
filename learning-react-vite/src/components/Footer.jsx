import logoImage from '../assets/logo.svg'
import facebookIcon from '../assets/icon-facebook.svg'
import youtubeIcon from '../assets/icon-youtube.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import pinterestIcon from '../assets/icon-pinterest.svg'
import instagramIcon from '../assets/icon-instagram.svg'
import '../styles/Footer.css'

export default function Footer () {
    return (
        <>
            <div className="footer-d1">
                <img className="logo" src={logoImage} alt="Easybank logo image" />
                <div className="footer-social-network">
                    <img className="face" src={facebookIcon} alt="Facebook icon" />
                    <img src={youtubeIcon} alt="Youtube icon" />
                    <img src={twitterIcon} alt="Twitter icon" />
                    <img src={pinterestIcon} alt="Pinterest icon" />
                    <img src={instagramIcon} alt="Instagram icon" />
                </div>
            </div>
            <div></div>
            <div></div>
        </>
    );
}