import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    bannerUrl: '',
    latestMatchObject: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchData()
  }

  camelCase = obj => ({
    competingTeam: obj.competing_team,
    competingTeamLogo: obj.competing_team_logo,
    firstInnings: obj.first_innings,
    manOfTheMatch: obj.man_of_the_match,
    date: obj.date,
    id: obj.id,
    umpires: obj.umpires,
    venue: obj.venue,
    result: obj.result,
    matchStatus: obj.match_status,
    secondInnings: obj.second_innings,
  })

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
      secondInnings: latestMatchDetails.second_innings,
    }
    const updatedRecentMatchDetails = recentMatches.map(eachItem =>
      this.camelCase(eachItem),
    )
    this.setState({
      bannerUrl: teamBannerUrl,
      latestMatchObject: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {bannerUrl, latestMatchObject, recentMatches, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="container">
            <img src={bannerUrl} alt="team banner" className="banner-image" />
            <div className="latest-match">
              <LatestMatch latest={latestMatchObject} />
            </div>
            <ul className="recent-match">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} recent={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
