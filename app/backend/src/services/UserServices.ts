import * as bcrypt from 'bcryptjs';
import { createToken } from '../utils/JWTgenerator';
import { ILogin } from '../interfaces/userInterfaces';
import Users from '../database/models/UsersModel';
import UserValidation from './validations/UserValidations';

export default class TeamService {
  constructor(private userModel = Users) { }

  public async login({ email, password }: ILogin) {
    const invalid = 'Invalid email or password';
    if (!UserValidation.valideUser(email, password)) {
      return { type: 401, message: { message: invalid } };
    }
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      return { type: 401, message: { message: invalid } };
    }
    const compare = bcrypt.compareSync(password, user.password);

    if (!compare) {
      return { type: 401, message: { message: invalid } };
    }

    const { password: _, ...args } = user.dataValues;

    const token = createToken(args);

    return { type: 200, message: { token } };
  }
}
