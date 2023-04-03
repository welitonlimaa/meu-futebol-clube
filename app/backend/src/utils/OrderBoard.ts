import ITeamBoard from '../interfaces/leaderboardInterfaces';

export default class OrderBoard {
  public static orderData(data: ITeamBoard[]) {
    const order = (a: ITeamBoard, b: ITeamBoard) => {
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalPoints > b.totalPoints) return -1;

      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;

      if (a.goalsFavor < b.goalsFavor) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;

      return 0;
    };

    return data.sort(order);
  }
}
