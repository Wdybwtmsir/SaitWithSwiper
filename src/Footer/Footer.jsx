import './Footer.scss'
import logo from '../assets/logo.svg'
import twi from '../assets/twi.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <footer>
        <div className='top_footer'>
            <div className='nav_footer'>
                <img src={logo} alt="" />
                <ul>
                <li><a href="/">Marketplace</a></li>
                <li><a href="/">Artists</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            </div>
            <ul className='contacts'>
                <li><img src={twi} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
                <li><img src={linkedin} alt="" /></li>
            </ul>
        </div>
        <div className='create_line_footer'></div>
        <ul className='bottom_footer'>
            <li>Crafted by Marion & Co.</li>
            <li>Powered by Webflow</li>
            <li>More templates</li>
            <li>License</li>
            <li>Style Guide</li>
        </ul>
    </footer>
  )
}

export default Footer