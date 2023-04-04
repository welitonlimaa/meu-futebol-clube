import ITeamBoard from '../interfaces/leaderboardInterfaces';

export default class BoardCalculate {
  public static totalPoints(homePoints: number, awayPoints: number): number {
    return homePoints + awayPoints;
  }

  public static totalGames(homeGames: number, awayGames: number): number {
    return homeGames + awayGames;
  }

  public static totalVictories(homeVictories: number, awayVictories: number): number {
    return homeVictories + awayVictories;
  }

  public static totalDraws(homeDraws: number, awayDraws: number): number {
    return homeDraws + awayDraws;
  }

  public static totalLosses(homeLosses: number, awayLosses: number): number {
    return homeLosses + awayLosses;
  }

  public static goalsFavor(homeGoalsFavor: number, awayHomeFavor: number): number {
    return homeGoalsFavor + awayHomeFavor;
  }

  public static goalsOwn(homeGoalsOwn: number, awayGoalOwn: number): number {
    return homeGoalsOwn + awayGoalOwn;
  }

  public static goalsBalance(homeGoalsBalance: number, awayGoalsBalance: number): number {
    return homeGoalsBalance + awayGoalsBalance;
  }

  public static efficiency(P: number, J: number): string {
    const effic = ((P / (J * 3)) * 100).toFixed(2);
    return effic;
  }

  public static result(homeBoard: ITeamBoard, awayBoard: ITeamBoard) {
    return {
      totalPoints: this.totalPoints(homeBoard.totalPoints, awayBoard.totalPoints),
      totalGames: this.totalGames(homeBoard.totalGames, awayBoard.totalGames),
      totalVictories: this.totalVictories(homeBoard.totalVictories, awayBoard.totalVictories),
      totalDraws: this.totalDraws(homeBoard.totalDraws, awayBoard.totalDraws),
      totalLosses: this.totalLosses(homeBoard.totalLosses, awayBoard.totalLosses),
      goalsFavor: this.goalsFavor(homeBoard.goalsFavor, awayBoard.goalsFavor),
      goalsOwn: this.goalsOwn(homeBoard.goalsOwn, awayBoard.goalsOwn),
      goalsBalance: this.goalsBalance(homeBoard.goalsBalance, awayBoard.goalsBalance),
      efficiency: this.efficiency(
        this.totalPoints(homeBoard.totalPoints, awayBoard.totalPoints),
        this.totalGames(homeBoard.totalGames, awayBoard.totalGames),
      ),
    };
  }
}
