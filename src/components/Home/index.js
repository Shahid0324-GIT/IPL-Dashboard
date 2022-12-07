import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachTeam => ({
      teamImageUrl: eachTeam.team_image_url,
      id: eachTeam.id,
      name: eachTeam.name,
    }))
    this.setState({
      iplTeams: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {iplTeams, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="card-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="ipl-head">IPL Dashboard</h1>
            </div>
            <ul className="list-card-container">
              {iplTeams.map(eachTeam => (
                <TeamCard key={eachTeam.id} team={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
