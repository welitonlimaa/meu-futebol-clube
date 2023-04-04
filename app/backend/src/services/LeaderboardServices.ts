import BoardCalculate from '../utils/BoardCalculate';
import BoardAwayCalculate from '../utils/BoardAwayCalculate';
import OrderBoard from '../utils/OrderBoard';
import ITeamBoard from '../interfaces/leaderboardInterfaces';
import ITeam from '../interfaces/teamInterfaces';
import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import BoardHomeCalculate from '../utils/BoardHomeCalculate';
import { IMatcheWithGoals } from '../interfaces/matcheInterfaces';

export default class LeaderboardService {
  constructor(private teamModel = Teams, private matcheModel = Matches) { }

  public async getLeaderboardHome() {
    const teams = await this.teamModel.findAll();
    const matches = await this.matcheModel.findAll({ where: { inProgress: false } });

    const leaderboardHomeTeams = teams.reduce((acc: ITeamBoard[], curr: ITeam) => {
      const teamMatches = matches
        .filter((matche) => matche.homeTeamId === curr.id);

      const result = BoardHomeCalculate.result(teamMatches as unknown as IMatcheWithGoals[]);

      acc.push({ name: curr.teamName, ...result });
      return acc;
    }, []);

    const leaderBoardOrder = OrderBoard.orderData(leaderboardHomeTeams);

    return { type: null, message: leaderBoardOrder };
  }

  public async getLeaderboardAway() {
    const teams = await this.teamModel.findAll();
    const matches = await this.matcheModel.findAll({ where: { inProgress: false } });

    const leaderboardAwayTeams = teams.reduce((acc: ITeamBoard[], curr: ITeam) => {
      const teamMatches = matches
        .filter((matche) => matche.awayTeamId === curr.id);

      const result = BoardAwayCalculate.result(teamMatches as unknown as IMatcheWithGoals[]);

      acc.push({ name: curr.teamName, ...result });
      return acc;
    }, []);

    const leaderBoardOrder = OrderBoard.orderData(leaderboardAwayTeams);

    return { type: null, message: leaderBoardOrder };
  }

  public async getLeaderboardAllTeams() {
    const teams = await this.teamModel.findAll();
    const matches = await this.matcheModel.findAll({ where: { inProgress: false } });

    const leaderboardAwayTeams = teams.reduce((acc: ITeamBoard[], curr: ITeam) => {
      const homeMatches = matches
        .filter((matche) => matche.homeTeamId === curr.id);
      const homeBoard = BoardHomeCalculate.result(homeMatches as unknown as IMatcheWithGoals[]);

      const awayMatches = matches
        .filter((matche) => matche.awayTeamId === curr.id);
      const awayBoard = BoardAwayCalculate.result(awayMatches as unknown as IMatcheWithGoals[]);

      const result = BoardCalculate.result(homeBoard, awayBoard);

      acc.push({ name: curr.teamName, ...result });
      return acc;
    }, []);

    const leaderBoardOrder = OrderBoard.orderData(leaderboardAwayTeams);

    return { type: null, message: leaderBoardOrder };
  }
}
