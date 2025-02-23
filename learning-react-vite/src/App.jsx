import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Article from './components/Article'
import Footer from './components/Footer'
import features from '../data/features.json'
import articles from '../data/articles.json'


function App() {

  const featuresComponents = features.map((feature) => {
    return (
        <Feature key={feature.id} image={feature.image} title={feature.title} text={feature.text}/>
    );
  });

  const articlesComponents = articles.map((article) => {
    return (
      <Article key={article.id} image={article.image} name={article.name} title={article.title} article={article.article}/>
    );
  });
  
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <section> 
        <Hero />
      </section>

      <section>
        <div className="features-root">
          <div className="features-p">
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p> 
          </div>
          <div className="features">
            {featuresComponents}
          </div>
        </div>
      </section>

      <article>
        <div className="articles-root">
          <h2>Latest articles</h2>
          <div className="articles">
            {articlesComponents}
          </div>
        </div>
      </article>

      <footer>
        <div className="footer">
          <Footer />
        </div>
        
      </footer>

    </>
  )
}

export default App
