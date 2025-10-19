import {section67} from '../data.js'

const Section67 = () => {
  const cards = section67.map(item=> <li key={Math.random()}>
      <img className='bg_pic' src={item.image} alt="" />
      <img className='profile_pic' src={item.profile_pic} alt="" />
      <h5>
        {item.name_artist}
      </h5>
      <button><h6>Follow</h6></button>
    </li>)
    return (
      <ul className='art_ul'>
        {cards}
      </ul>
    )
}

export default Section67