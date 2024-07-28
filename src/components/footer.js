import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2023 Sirius Lucibus. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://mp.weixin.qq.com/s/EDNvuTxdClT-0H-nRbcSDA" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.instagram.com/siriuslucibus/" target="_blank" rel="noopener noreferrer">WeChat</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
