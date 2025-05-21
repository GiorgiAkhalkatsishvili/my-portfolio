import React from 'react'
import './FooterComponent.css';
import emailPhoto from '../../assets/mail_icon.jpg';

const FooterComponent = () => {
  return (
    <div className='footerComponent'>
    <div className="footer-inner">
      <div className="user-name">
        <h1>George<span>.</span></h1>
        </div>
        <div className="email-address">
          <img src={emailPhoto} alt="" />
          <p>georgeakhalkatsishvili748@gmail.com</p>
        </div>
        <hr />
        <div className="final-texts">
          <div className="final-paragraph">
            <p>© 2025 George Akhalkatsishvili. All rights reserved.</p>
          </div>
          <div className="list">
            <ul>
              <li>Connect with me</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
