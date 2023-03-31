import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import * as JWT from '../utils/JWTgenerator';

import Matches from '../database/models/MatchesModel';

import matchesMock from './Mocks/matchesMock';

import IMatcheTeam from '../interfaces/matcheInterfaces';

import Teams from '../database/models/TeamsModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de integração Matches', () => {
	afterEach(() => {
		sinon.restore();
	})

	it('route /matches return status 200 e os dados das partidas', async () => {
		sinon
			.stub(Matches, "findAll")
			.resolves();
		// sinon.stub(JWT, "createToken").returns(tokenMock);
		const httpResponse = await chai.request(app).get(`/matches`);

		expect(httpResponse.status).to.be.equal(200);
		expect(httpResponse.body).to.be.deep.equal(matchesMock);
	});
});
