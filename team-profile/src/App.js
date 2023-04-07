import teamList from './team';
import { useState } from 'react';

function App() {
  // eslint-disable-next-line
  const [teams, setTeams] = useState(teamList);
  return (
    <main>
      <section className="container">
        <h2>{teams.length} Team Member</h2>
        <h4>Meet the team</h4>
        {teams.map((team)  => {
          const {id, name, designation, image} = team;
          return (
            <div className='person' key={id}>
              <img src={image} alt={name}></img>
              <div>
                <h4>{name}</h4>
                <p>{designation}</p>
              </div>
            </div>
          )
          })
        }
        <button>View More</button>

      </section>
    </main>
  );
}

export default App;
