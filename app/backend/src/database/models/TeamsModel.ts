import { Model, DataTypes, CreationOptional } from 'sequelize';

import db from '.';

class Teams extends Model {
  declare id: CreationOptional<number>;;
  declare teamName: string;
}

Teams.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  teamName: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}, {
  tableName: 'teams',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default Teams;
