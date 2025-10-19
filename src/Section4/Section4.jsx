import {section4} from '../data.js'
import circle_image from '../assets/circle_image.svg'
import './Section4.scss'

const Section4 = () => {
  const cards = section4.map(item => <li className='create_card' key={Math.random()}>
    <div>
        <img src={circle_image} alt="" />
        <h4>{item.title}</h4>
        <p>{item.text}</p>
    </div>
  </li>)
  return (
    <section className='create_sec'>
      <h2>Create and sell NFTs</h2>
      <ul>
        {cards}
      </ul>
    </section>
  )
}

export default Section4