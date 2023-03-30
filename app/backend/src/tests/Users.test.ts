import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Users from '../database/models/UsersModel';

import { createToken } from '../utils/JWTgenerator';

// import usersService from '../services/usersService';

// import usersController from '../controllers/usersControler';

// import { Response } from 'superagent';

// import ITeam from '../Interfaces/teamInterfaces';

import loginReqMock, { tokenMock, dataUserMock } from './Mocks/usersMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de integração User', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('route /login return status 200 e os dados do usuario em token', async () => {
        sinon
            .stub(Users, "findOne")
            .resolves(dataUserMock as Users);
        // sinon.stub(createToken).returns(tokenMock);
        const httpResponse = await chai.request(app)
            .post(`/login`)
            .send(loginReqMock);

        expect(httpResponse.status).to.be.equal(200);
        // expect(httpResponse.body).to.be.deep.equal(loginReqMock);
    });
});
