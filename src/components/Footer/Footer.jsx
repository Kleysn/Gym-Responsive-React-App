import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className="Footer-container">

            <hr />
            <div className='footer'>

                <div className="social-links">

                    <a href="https://github.com/Kleysn"><img src={Github} alt="" /></a>
                    <a href="https://www.instagram.com/kleysn/?next=%2F"><img src={Instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/kleiton-santos-ab37b61bb/"><img src={Linkedin} alt="" /></a>


                </div>

                <div className='logo-f'>
                    <img src={Logo} alt="" />
                </div>

            </div>

            <div className='blur footer-blur-1'></div>


        </div>
    )
}

export default Footer
