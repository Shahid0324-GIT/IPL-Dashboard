import './index.css'

const LatestMatch = props => {
  const {latest} = props
  const {
    firstInnings,
    secondInnings,
    date,
    venue,
    umpires,
    competingTeam,
    competingTeamLogo,
    manOfTheMatch,
    result,
  } = latest

  return (
    <div className="card">
      <div className="match-result">
        <p className="second-team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="second-team-logo">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="logo"
        />
      </div>
      <div className="match-details">
        <p className="para">First Innings</p>
        <p className="para">{firstInnings}</p>
        <p className="para">Second Innings</p>
        <p className="para">{secondInnings}</p>
        <h2 className="para">Man Of The Match</h2>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">Umpires</p>
        <p className="para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
