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

  public static totalGames(teamMatches: IMatcheWithGoals[]): number {
    return teamMatches.length;
  }

  public static totalVictories(teamMatches: IMatcheWithGoals[]): number {
    const totalVictories = teamMatches.reduce((acc: number, curr: IMatcheWithGoals) => {
      let vitorias = 0;
      if (curr.homeTeamGoals > curr.awayTeamGoals) vitorias = 1;
      return acc + vitorias;
    }, 0);
    return totalVictories;
  }

  public static totalDraws(teamMatches: IMatcheWithGoals[]): number {
    const totalDraws = teamMatches.reduce((acc: number, curr: IMatcheWithGoals) => {
      let draws = 0;
      if (curr.homeTeamGoals === curr.awayTeamGoals) draws = 1;
      return acc + draws;
    }, 0);
    return totalDraws;
  }

  public static totalLosses(teamMatches: IMatcheWithGoals[]): number {
    const totalLosses = teamMatches.reduce((acc: number, curr: IMatcheWithGoals) => {
      let losses = 0;
      if (curr.homeTeamGoals === curr.awayTeamGoals) losses = 1;
      return acc + losses;
    }, 0);
    return totalLosses;
  }

  public static goalsFavor(teamMatches: IMatcheWithGoals[]): number {
    const goalsFavor = teamMatches
      .reduce((acc: number, curr: IMatcheWithGoals) => acc + curr.homeTeamGoals, 0);
    return goalsFavor;
  }

  public static goalsOwn(teamMatches: IMatcheWithGoals[]): number {
    const goalsOwn = teamMatches
      .reduce((acc: number, curr: IMatcheWithGoals) => acc + curr.awayTeamGoals, 0);
    return goalsOwn;
  }

  public static result(teamMatches: IMatcheWithGoals[]) {
    return {
      totalPoints: this.totalPoints(teamMatches),
      totalGames: this.totalGames(teamMatches),
      totalVictories: this.totalVictories(teamMatches),
      totalDraws: this.totalDraws(teamMatches),
      totalLosses: this.totalLosses(teamMatches),
      goalsFavor: this.goalsFavor(teamMatches),
      goalsOwn: this.goalsOwn(teamMatches),
    };
  }
}
