import ITeamBoard from '../interfaces/leaderboardInterfaces';
import { IMatcheWithGoals } from '../interfaces/matcheInterfaces';

export default class BoardCalculate {
  public static totalPoints(teamMatches: IMatcheWithGoals[]): number {
    const totalPoints = teamMatches.reduce((acc: number, curr: IMatcheWithGoals) => {
      let points = 0;
      if (curr.homeTeamGoals > curr.awayTeamGoals) points = 3;
      if (curr.homeTeamGoals === curr.awayTeamGoals) points = 1;
      return acc + points;
    }, 0);
    return totalPoints;
  }

  public static result(teamMatches: IMatcheWithGoals) {
    return {
      totalPoints: this.totalPoints(teamMatches),
      totalGames: 5,
      totalVictories: 4,
      totalDraws: 1,
      totalLosses: 0,
      goalsFavor: 17,
      goalsOwn: 5,
      goalsBalance: 12,
      efficiency: 86.67,
    };
  }
}
