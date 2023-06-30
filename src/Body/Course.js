import './Course.css'
import satelitte from './Satelite.svg'

function Course() {
  return (
    <div className='course-container'>
        <div className='courses'>
            
            <div className='course-popup-1'>
                <h2><strong>Interactive Features</strong></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            <div className='course-popup-2'>
                <h2><strong>Interactive Features</strong></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            <div className='course-popup-3'>
                <h2><strong>Interactive Features</strong></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
            <div className='course-popup-4'>
                <h2><strong>Interactive Features</strong></h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
            </div>
        </div>
        <div className='abouts'>
            <h1 className='about-course'><strong>About the course</strong></h1>
            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
            <button className="button-2">Explore Now</button>
        </div>
    </div>
  )
}

export default Course