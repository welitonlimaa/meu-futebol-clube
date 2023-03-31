import Matches from '../database/models/MatchesModel';

export default interface IMatcheTeam extends Matches {
  homeTeam: {
    teamName: string,
  },
  awayTeam: {
    teamName: string,
  }
}
