import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { NavBarComponent } from './componenet/NavBar';
import { PokemonContextProvider } from './context/pokemonContext';

function App() {
  return (
    <>
      <PokemonContextProvider>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </PokemonContextProvider>
    </>

  );
}

export default App;
