import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <body className="bg-[#fff8f3] w-full">
      <Nav/>
      <Hero/>
      <Services/>
      <About/>
      <Card/>
      <Contact/>
      <Footer/>
    </body>
  );
}

export default App;
