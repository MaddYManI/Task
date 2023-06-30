import './Highlights.css'
import img_1 from '../highlights-1.png'
import img_2 from '../highlights-2.png'
import mic from '../Mic.svg'
import mic2 from '../Mic2.svg'

function Highlights() {
  return (
    <div className='highlights-container'>
        <h1>Learn how to launch a successful podcast</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <button className='button-1'><b>Sign up Now</b></button>
        <div className='dots'>
            <span className='dots1'></span>
            <img src={mic} className='mic'/>
        </div>
        <img src={img_1} className='highlights-img-1' />
        <img src={img_2} className='highlights-img-2'/>
    </div>
  )
}
export default Highlights;
