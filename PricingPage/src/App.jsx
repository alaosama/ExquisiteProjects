import './App.css'
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features/Features'
import Home from './components/Home/Home'
import About from './components/About/About'
import Pricing from './componenets/Pricing/Pricing'


const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <Features/>
      <About/> 
      <Pricing/>
    </>
  )
}

export default App
