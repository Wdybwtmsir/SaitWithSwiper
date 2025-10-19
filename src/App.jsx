import Header from "./Header/Header.jsx"
import Section1 from "./Section1/Section1.jsx"
import Section2 from "./Section2/Section2.jsx"
import Section3 from "./Section3/Section3.jsx"
import Section4 from "./Section4/Section4.jsx"
import Section5 from "./Section5/Section5.jsx"
import Section6 from "./Section6/Section6.jsx"
import Section7 from "./Section7/Section7.jsx"
import Footer from "./Footer/Footer.jsx"
import './App.scss'
import {Link} from 'react-router-dom';

function App() {

  return (
    <main>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </main>
  )
}

export default App