import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import PlayerProfilePage from './pages/player-profile-page/player-profile-page.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="/players" element={<PlayerProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
