import ITeamBoard from '../interfaces/leaderboardInterfaces';
import ITeam from '../interfaces/teamInterfaces';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import BoardCalculate from '../utils/BoardCalculate';
import { IMatcheWithGoals } from '../interfaces/matcheInterfaces';

export default class LeaderboardService {
  constructor(private teamModel = Teams, private matcheModel = Matches) { }

  public async getLeaderboardHome() {
    const teams = await this.teamModel.findAll();
    const matches = await this.matcheModel.findAll();

    const leaderboardHomeTeams = teams.reduce((acc: ITeamBoard[], curr: ITeam) => {
      const teamMatches = matches
        .filter((matche: IMatcheWithGoals) => matche.homeTeamId === curr.id);

      const result = BoardCalculate.result(teamMatches);

      acc.push({ name: curr.teamName, ...result });
      return acc;
    }, []);

    return { type: null, message: leaderboardHomeTeams };
  }
}
