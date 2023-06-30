import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Highlights from './Body/Highlights'
import Course from './Body/Course';
import Plan from './Body/Plan';
import Testimonals from './Body/Testimonals';
import Footer from './Body/Footer';


function App() {
  return (
    <main>
      <span className='background'></span>
      <span className='background1'></span>
      <span className='background2'></span>
      <Nav/>
      <Highlights/>
      <Course/>
      <Plan/>
      <Testimonals/>
      <Footer/>
    </main>
  );
}

export default App;
