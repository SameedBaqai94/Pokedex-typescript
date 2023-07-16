import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { NavBarComponent } from './componenet/NavBar';
import { PokemonContextProvider } from './context/pokemonContext';

function App() {
  return (
    <>
      <PokemonContextProvider>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PokemonContextProvider>
    </>

  );
}

export default App;
