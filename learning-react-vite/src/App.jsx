import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Article from './components/Article'
import Footer from './components/Footer'


function App() {
  
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <section> 
        <Hero />
      </section>

      <section>
        <Feature />
      </section>

      <article>
        <div>
          <h2>Latest articles</h2>
          <Article />
        </div>
      </article>

      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
