import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="card-design-for-team">
        <div className="team-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <div>
            <p>{name}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
