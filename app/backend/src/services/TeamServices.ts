// import ITeam from '../Interfaces/teamInterfaces';

import Teams from '../database/models/TeamsModel';

export default class TeamService {
  constructor(private teamModel = Teams) {}

  public async getAll() {
    const result = await this.teamModel.findAll();
    return { type: null, message: result };
  }
}
