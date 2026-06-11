import { useSelector } from 'react-redux';
import './App.css'
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Header/Header.tsx';
import Gallery from './components/MainGallery/MainGallery.tsx';
import EverythingGallery from './components/EverythingGallery/EverythingGallery.tsx';
import type { RootState } from './app/store.ts';
import PlaceGallery from './components/PlaceGallery/PlaceGallery.tsx';
import { places } from './app/helpers/photos.ts';

function App() {
  const selectedPlace = useSelector((state: RootState) => state.place.value)

  const seeAll = selectedPlace === "all";

  const renderCurrentView = () => {
    if (seeAll) {
      return <EverythingGallery />;
    }

    if (selectedPlace) {
      return <PlaceGallery place={selectedPlace}/>
    }

    return <Gallery places={places}/>
  }

  return (
    <>
      <header className="mainHeader">
        <Header/>
      </header>

      <main className={`mainGallery ${seeAll ? 'mainGalleryEverything' : ''}`}>
        {renderCurrentView()}
      </main>

      <footer className="mainFooter">
        <Footer/>
      </footer>
    </>
  )
}

export default App;
