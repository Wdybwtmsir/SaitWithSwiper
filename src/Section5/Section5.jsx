import './Section5.scss'
import btn_pic from '../assets/trending_btn.svg'
import {section5} from '../data.js'
import WM from '../assets/watermark.png'

const Section5 = () => {
  const trend_pics = section5.map((item) => 
  <li key={Math.random()} className='trend_card'>
    <div>
      <h5>{item.title}</h5>
      <div className='text_card'>
        <p>{item.text}</p>
        <p><span>{item.cost}</span></p>
      </div>
    </div>
    <div className='img_cards'>
      <img className='bg_card' src={item.image} alt="" />
      <img className='w_card' src={WM} alt="" />
    </div>
  </li>)
  return (
    <section className='trend_sec'>
      <ul>
        <li className='trend_title'>
            <h2>Trending this week</h2>
            <p>Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        {trend_pics}
        <li className='trend_btn'>
          <button>
            <img src={btn_pic} alt="" />
            <p>View marketplace</p>
          </button>
        </li>
      </ul>
      
    </section>
  )
}

export default Section5