import './Section2.scss'

const Section2 = () => {
  return (
    <section className='stat_section'>
      <div>
        <p className='stat_text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, 
          eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <ul >
          <li>
            <h3>
              17K
            </h3>
            <p>
              Artwork
            </p>
          </li>
          <li>
            <h3>
              4.5K
            </h3>
            <p>
              Auctions
            </p>
          </li>
          <li>
            <h3>
              23
            </h3>
            <p>
              Artists
            </p>
          </li>
        </ul>
      </div>
      
    </section>
  )
}

export default Section2