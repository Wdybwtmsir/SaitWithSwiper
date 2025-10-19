import {Link} from 'react-router-dom';
import './Header.scss'
import img1 from '../assets/logo.svg'

export default function Header(){
  return (
    <header className="main">
        <nav>
            <img className='logo' src={img1} alt="" />
            <ul>
                <li><a href="/">Marketplace</a></li>
                <li><a href="/">Artists</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
        <button><h5>Buy Template</h5></button>
    </header>
  )
}