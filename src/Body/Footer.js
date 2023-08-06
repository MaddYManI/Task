import './Footer.css'
import facebook from './facebook.svg'
import youtube from './youtube.svg'
import insta from './insta.svg'
import tweet from './tweet.svg'

function Footer() {
  return (
    <div className='footer-container'>
        <span className='bgnd'></span>
        <div className='quotes'>
            <h1>We have what you’re looking for</h1>
            <p className='footer-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
            <button className='button-5'>Get Started Now</button>
        </div>
        <div className='contact-links'>
            <h2 className='f-1'>All Right Reserved @Copyright 2023</h2>
            <div className='terms'>
                <h2 className='terms-style'>Terms of Service</h2>
                <h2 className='terms-style'>Privacy Policy</h2>
                <h2 className='terms-style'>Product</h2>
            </div>
            <div className='social-media'>
                <img src={facebook} className='media-img'/>
                <img src={youtube} className='media-img'/>
                <img src={insta} className='media-img'/>
                <img src={tweet} className='media-img'/>
            </div>
        </div>
    </div>
  )
}

export default Footer