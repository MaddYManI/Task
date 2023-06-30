import './Testimonals.css'
import hero from './hero.svg'

function Testimonals() {
  return (
    <div className='testimonal-container'>
        <div className='review-container'>
            <h1>Review from customers</h1>
            <p className='review-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
        </div>

            <div className='hero-container1'>
                <img className='hero-img' src={hero} />
                <div className='hero-name'>
                    <h2>Lolla Smith</h2>
                    <h3>Microsoft</h3>
                </div>
                <p className='hero-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
            </div>
            <div className='hero-container2'>
                <img className='hero-img' src={hero} />
                <div className='hero-name'>
                    <h2>Lolla Smith</h2>
                    <h3>Microsoft</h3>
                </div>
                <p className='hero-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
            </div>
            <div className='hero-container3'>
                <img className='hero-img' src={hero} />
                <div className='hero-name'>
                    <h2>Lolla Smith</h2>
                    <h3>Microsoft</h3>
                </div>
                <p className='hero-des'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </p>
            </div>

    </div>
  )
}

export default Testimonals