import OrderBoard from '../utils/OrderBoard';
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
    const matches = await this.matcheModel.findAll({ where: { inProgress: false } });

    const leaderboardHomeTeams = teams.reduce((acc: ITeamBoard[], curr: ITeam) => {
      const teamMatches = matches
        .filter((matche) => matche.homeTeamId === curr.id);

      const result = BoardCalculate.result(teamMatches as unknown as IMatcheWithGoals[]);

      acc.push({ name: curr.teamName, ...result });
      return acc;
    }, []);

    const leaderBoardOrder = OrderBoard.orderData(leaderboardHomeTeams);

    return { type: null, message: leaderBoardOrder };
  }
}
