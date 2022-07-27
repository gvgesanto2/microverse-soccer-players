import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeamsStartAsync } from './redux/team/team.actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeamsStartAsync('2022'));
    // const teams = getTeamsFromPremiereLeagueBySeason('2021');
    // console.log(teams);
    // fetch('https://v3.football.api-sports.io/players?team=36&season=2021', {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-host': 'v3.football.api-sports.io',
    //     'x-rapidapi-key': '079a852733bca06c231fa32314cb357b',
    //   },
    // }).then((response) => response.json())
    //   .then((data) => { console.log(data); })
    //   .catch((error) => { console.log(error); });
    // fetch('https://v3.football.api-sports.io/teams?league=39&season=2022', {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-host': 'v3.football.api-sports.io',
    //     'x-rapidapi-key': '079a852733bca06c231fa32314cb357b',
    //   },
    // }).then((response) => response.json())
    //   .then((data) => { console.log(data); })
    //   .catch((error) => { console.log(error); });
  }, []);

  return (
    <div>Hi</div>
  );
}

export default App;
