import * as bcrypt from 'bcryptjs';
import { createToken } from '../utils/JWTgenerator';
import { ILogin } from '../interfaces/userInterfaces';
import Users from '../database/models/UsersModel';
import UserValidation from './validations/UserValidations';

export default class TeamService {
  constructor(private userModel = Users) { }

  public async login({ email, password }: ILogin) {
    if (!UserValidation.valideUser(email, password)) {
      return { type: 400, message: 'All fields must be filled' };
    }
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      return { type: 401, message: 'email invalid' };
    }
    const compare = bcrypt.compareSync(password, user.password);

    if (!compare) {
      return { type: 401, message: 'password invalid' };
    }
    const token = createToken(user);

    return { type: 200, message: { token } };
  }
}
