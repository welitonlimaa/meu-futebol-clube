import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Users from '../database/models/UsersModel';

import * as JWT from '../utils/JWTgenerator';

import loginReqMock, {
    tokenMock,
    dataUserMock,
    loginWithOutEmailMock,
    loginInvalidEmailMock,
    loginInvalidPasswordMock
} from './Mocks/usersMock';

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
        sinon.stub(JWT, "createToken").returns(tokenMock);
        const httpResponse = await chai.request(app)
            .post(`/login`)
            .send(loginReqMock);

        expect(httpResponse.status).to.be.equal(200);
        expect(httpResponse.body).to.be.deep.equal({ token: tokenMock });
    });

    it('route /login return status 400 data sem email', async () => {
        sinon
            .stub(Users, "findOne")
            .resolves(dataUserMock as Users);
        sinon.stub(JWT, "createToken").returns(tokenMock);
        const httpResponse = await chai.request(app)
            .post(`/login`)
            .send(loginWithOutEmailMock.req);

        expect(httpResponse.status).to.be.equal(400);
        expect(httpResponse.body).to.be.deep.equal(loginWithOutEmailMock.message);
    });

    it('route /login return status 401 email invalido não autorizado', async () => {
        sinon
            .stub(Users, "findOne")
            .resolves(dataUserMock as Users);
        sinon.stub(JWT, "createToken").returns(tokenMock);
        const httpResponse = await chai.request(app)
            .post(`/login`)
            .send(loginInvalidEmailMock.req);

        expect(httpResponse.status).to.be.equal(401);
        expect(httpResponse.body).to.be.deep.equal(loginInvalidEmailMock.message);
    });

    it('route /login return status 401 senha invalida não autorizado', async () => {
        sinon
            .stub(Users, "findOne")
            .resolves(dataUserMock as Users);
        sinon.stub(JWT, "createToken").returns(tokenMock);
        const httpResponse = await chai.request(app)
            .post(`/login`)
            .send(loginInvalidPasswordMock.req);

        expect(httpResponse.status).to.be.equal(401);
        expect(httpResponse.body).to.be.deep.equal(loginInvalidPasswordMock.message);
    });
});
