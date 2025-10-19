import './Section1.scss'
import WM from '../assets/watermark.png'
import pic1 from '../assets/about.png'
import pic2 from '../assets/play.png'
import Section2 from '../Section2/Section2'

const Section1 = () => {
  return (
    <section className='about_section'>
      <div className='about_text'>
        <div>
              <h1>
              Discover rare digital art and collect NFT’s
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. 
              Duis cursus, mi quis viverra ornare, eros dolor interdum.
            </p>
        </div>
            
             <button className='btn_watch'>
                <h2>Watch video</h2>
                <img src={pic2} alt="" />
             </button>
      </div>
      <img className='pic_about' src={pic1} alt="" />
      <img className='watermark_about' src={WM} alt="" />
      <div className='black_sq'></div>
      <div className='gray_sq'></div>
     
    </section>
  )
}

export default Section1