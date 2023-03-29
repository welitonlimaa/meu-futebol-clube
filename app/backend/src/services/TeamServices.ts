// import ITeam from '../Interfaces/teamInterfaces';

import Teams from '../database/models/TeamsModel';

export default class TeamService {
  constructor(private teamModel = Teams) {}

  public async getAll() {
    const result = await this.teamModel.findAll();
    return { type: null, message: result };
  }

  public async getById(id: number) {
    const result = await this.teamModel.findByPk(id);
    return { type: null, message: result };
  }
}
