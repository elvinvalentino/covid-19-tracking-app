import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <span>copyright &copy; 2020 vinval.com</span>
            <div className="social-bar">
                <a href="/" className="social-icon">
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt=""/>
                </a>
                <a href="/" className="social-icon">
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt=""/>
                </a>
                <a href="/" className="social-icon">
                    <img src="https://img.icons8.com/color/48/000000/gmail.png" alt=""/>
                </a>
                <a href="/" className="social-icon">
                    <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Footer;