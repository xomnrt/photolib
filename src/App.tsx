import './App.css'
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import Gallery from './components/Gallery/Gallery.tsx';

function App() {

  return (
    <>
      <header className="mainHeader">
        <Header/>
      </header>

      <main className='mainGallery'>
        <Gallery />
      </main>

      <footer className="mainFooter">
        <Footer/>
      </footer>
    </>
  )
}

export default App;
