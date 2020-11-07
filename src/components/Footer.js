import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <span>copyright &copy; 2020 vinval.com. All rights reserved</span>
            <div className="social-bar">
                <a href="https://www.facebook.com/elvin.valentino" target="__blank" className="social-icon">
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook"/>
                </a>
                <a href="https://twitter.com/elvin_val" target="__blank" className="social-icon">
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter"/>
                </a>
                <a href="https://www.instagram.com/elvin.val/" target="__blank" className="social-icon">
                    <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
