import easyBankLogo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

export default function Navbar () {
    return (
        <>
            <div className="nav-bar">
                <img src={easyBankLogo} alt="Easy bank logo " />
                <div className="link-wrapper">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/">About</Link>
                    <Link className="nav-link" to="/">Contact</Link>
                    <Link className="nav-link" to="/">Blog</Link>
                    <Link className="nav-link" to="/">Careers</Link>
                </div>
                <button className="btn-request-invite">Request Invite</button>
            </div> 
        </>
    );
}