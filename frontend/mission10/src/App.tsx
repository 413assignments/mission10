import React, {useEffect, useState} from 'react';
import { Bowler } from './types/Bowler'
import './App.css';


function BowlerList() {
    const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

    useEffect(() => {
        const fetchBowlerData = async () => {
            const res = await fetch('https://localhost:7208/api/bowlers');
            setBowlerData(await res.json());
        };
        fetchBowlerData();
    }, []);





    return (
        <>
            <div className = "row">
                <h4 className="text-center">Bowlers</h4>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                {bowlerData.map((b) => {
                    return (
                        <tr key={b.bowlerID}>
                            <td>{b.bowlerFirstName + " " +
                                (b.bowlerMiddleInit ? (b.bowlerMiddleInit + ". "): "") +
                                b.bowlerLastName}</td>
                            <td>{b.team.teamName}</td>
                            <td>{b.bowlerAddress}</td>
                            <td>{b.bowlerCity}</td>
                            <td>{b.bowlerState}</td>
                            <td>{b.bowlerZip}</td>
                            <td>{b.bowlerPhoneNumber}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
}





function Header() {
  return (
      <>
        <br/><br/><br/>
        <h2>This is a website for listing bowler information.</h2>
      </>
  )
}



function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <BowlerList/>
        </header>
      </div>
  );
}

export default App;