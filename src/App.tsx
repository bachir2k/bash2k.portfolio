
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import  Footer from './components/Footer'


function App() {

  return (
    <>
 <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <About/>
        <Contact/>

        <Footer />
        
      </div>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
