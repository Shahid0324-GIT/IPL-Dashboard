import './index.css'

const MatchCard = props => {
  const {recent} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recent

  return (
    <li className="recent-list-container">
      <div className="recent-card-details">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="logo-recent"
        />
        <p className="para">{competingTeam}</p>
        <div className="details-container">
          <p className="para">{result}</p>
          {matchStatus === 'Won' ? (
            <p className="won">{matchStatus}</p>
          ) : (
            <p className="lost">{matchStatus}</p>
          )}
        </div>
      </div>
    </li>
  )
}

export default MatchCard
