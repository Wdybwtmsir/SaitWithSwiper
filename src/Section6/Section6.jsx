import'./Section6.scss';
import btn_pic from '../assets/trending_btn.svg';
import { useState } from 'react';
import Section67 from './Section67';
import Section66 from './Section66';

const Section6 = () => {
  const [sw, setSw] = useState(0);

  return (
    <section className='art_sec'>
      <div className='art_nav'>
        <button className={`btn_all ${sw === 0 ? 'active' : ''}`} onClick={()=>setSw(0)}>
          <div>
             <div className='btn_view'> 
              <img src={btn_pic} alt="" />
              <h4><span>View all artists</span></h4>
            </div>
            <p>Lorem ipsum dolor sit amet, tempor consectetur dolore.</p>
          </div>
         
        </button>
        <button  className={`btn_popular ${sw === 1 ? 'active' : ''}`} onClick={()=>setSw(1)}> 
          <h3>Popular artists</h3>
        </button>
      </div>
      <div className='art_div'>
        {sw===0 ? <Section66/> : <Section67/>}
      </div>
      
    </section>
  )
}

export default Section6