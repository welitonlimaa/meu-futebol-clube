import { Model, DataTypes, CreationOptional, ForeignKey } from 'sequelize';

import Teams from './TeamsModel';

import db from '.';

class Matches extends Model {
  declare id: CreationOptional<number>;;
  declare homeTeamId: ForeignKey<Teams['id']>;
  declare homeTeamGoals: number;
  declare awayTeamId: ForeignKey<Teams['id']>;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
  },
}, {
  tableName: 'matches',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'teamHomeTeamId' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'teamAwayTeamId' });

Teams.hasMany(Matches, { foreignKey: 'homeTeamId', as: 'matchesHomeTeamId' });
Teams.hasMany(Matches, { foreignKey: 'awayTeamId', as: 'matchesAwayTeamId' });

export default Matches;
