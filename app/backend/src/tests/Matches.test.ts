import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import * as JWT from '../utils/JWTgenerator';

import Matches from '../database/models/MatchesModel';

import matchesMock, { matchesInProgress } from './Mocks/matchesMock';

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

		const httpResponse = await chai.request(app).get(`/matches`);

		expect(httpResponse.status).to.be.equal(200);
		expect(httpResponse.body).to.be.deep.equal(matchesMock);
	});

	it('route /matches return status 200 e os dados das partidas em progresso', async () => {
		sinon
			.stub(Matches, "findAll")
			.resolves();

		const httpResponse = await chai.request(app).get(`/matches?inProgress`);

		expect(httpResponse.status).to.be.equal(200);
		expect(httpResponse.body).to.be.deep.equal(matchesInProgress);
	});

	it('route /matches:id/finish return status 201 ao atualizar o status de uma partida', async () => {
		sinon
			.stub(Matches, "findAll")
			.resolves();
		// sinon.stub(JWT, "verifyToken").returns(tokenMock);
		const httpResponse = await chai.request(app).patch(`/matches:id/finish`);

		expect(httpResponse.status).to.be.equal(200);
	})
});
