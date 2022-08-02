import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import PlayerDetailsPage from './pages/player-details-page/player-details-page.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="/players" element={<PlayerDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
