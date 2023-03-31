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
}
