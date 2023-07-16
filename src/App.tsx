import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { NavBarComponent } from './componenet/NavBar';

function App() {
  return (
    <>

      <NavBarComponent />
      <Routes>
        <Route path="/Pokedex-typescript" element={<HomePage />} />
      </Routes>

    </>

  );
}

export default App;
