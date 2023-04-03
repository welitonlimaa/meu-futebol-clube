import { IGoals, IMatche } from '../interfaces/matcheInterfaces';
import Teams from '../database/models/TeamsModel';
import Matches from '../database/models/MatchesModel';

export default class MatcheService {
  constructor(private matcheModel = Matches) { }

  public async getAll() {
    const result = await this.matcheModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam' },
        { model: Teams, as: 'awayTeam' },
      ],
    });
    return { type: null, message: result };
  }

  public async getAllByStatus(status: boolean) {
    const result = await this.matcheModel.findAll({
      where: { inProgress: status },
      include: [
        { model: Teams, as: 'homeTeam' },
        { model: Teams, as: 'awayTeam' },
      ],
    });
    return { type: null, message: result };
  }

  public async updateStatus(matcheId: number) {
    const matche = await this.matcheModel.findByPk(matcheId);
    if (!matche) return { type: 404, message: { message: 'Matche does not exist' } };

    await this.matcheModel.update({ inProgress: false }, { where: { id: matcheId } });
    return { type: 200, message: { message: 'Finished' } };
  }

  public async updateGoals(matcheId: number, goalsData: IGoals) {
    const matche = await this.matcheModel.findByPk(matcheId);
    if (!matche) return { type: 404, message: { message: 'Matche does not exist' } };

    await this.matcheModel.update(goalsData, { where: { id: matcheId } });
    return { type: 200, message: { message: 'Updated!' } };
  }

  public async createMatche(data: IMatche) {
    const { homeTeamId, awayTeamId } = data;

    const message422 = 'It is not possible to create a match with two equal teams';

    if (homeTeamId === awayTeamId) return { type: 422, message: { message: message422 } };

    const findHomeTeam = await Teams.findByPk(homeTeamId);
    const findAwayTeam = await Teams.findByPk(awayTeamId);
    const message404 = 'There is no team with such id!';

    if (!findHomeTeam || !findAwayTeam) return { type: 404, message: { message: message404 } };

    const matcheData = { ...data, inProgress: true };
    const result = await this.matcheModel.create(matcheData);

    const matcheCreated = { id: result.id, ...matcheData };

    return { type: 201, message: matcheCreated };
  }
}
