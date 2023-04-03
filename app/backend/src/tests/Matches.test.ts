import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import * as JWT from '../utils/JWTgenerator';

import Matches from '../database/models/MatchesModel';

import matchesMock, { matchesInProgress, createMatche, dataUserByToken } from './Mocks/matchesMock';

import IMatcheTeam from '../interfaces/matcheInterfaces';

import Teams from '../database/models/TeamsModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de integração Matches', () => {
	const { res: { body } } = createMatche;
	afterEach(() => {
		sinon.restore();
	})

	// it('route /matches return status 200 e os dados das partidas', async () => {
	// 	sinon
	// 		.stub(Matches, "findAll")
	// 		.resolves();

	// 	const httpResponse = await chai.request(app).get(`/matches`);

	// 	expect(httpResponse.status).to.be.equal(200);
	// 	expect(httpResponse.body).to.be.deep.equal(matchesMock);
	// });

	// it('route /matches return status 200 e os dados das partidas em progresso', async () => {
	// 	sinon
	// 		.stub(Matches, "findAll")
	// 		.resolves();

	// 	const httpResponse = await chai.request(app).get(`/matches?inProgress`);

	// 	expect(httpResponse.status).to.be.equal(200);
	// 	expect(httpResponse.body).to.be.deep.equal(matchesInProgress);
	// });

	it('route /matches:id/finish return status 200 ao atualizar o status de uma partida', async () => {
		sinon
			.stub(Matches, "findByPk")
			.resolves(body as Matches);
		sinon
			.stub(Matches, "update")
			.resolves([0]);
		sinon.stub(JWT, "verifyToken").returns(dataUserByToken);
		const httpResponse = await chai.request(app)
			.patch(`/matches/1/finish`)
			.set(createMatche.req.headers);

		expect(httpResponse.status).to.be.equal(200);
	});

	it('route /matches:id/finish return status 404 ao tentar finalizar uma partida que não existe', async () => {
		sinon
			.stub(Matches, "findByPk")
			.resolves(undefined);
		sinon
			.stub(Matches, "update")
			.resolves([0]);
		sinon.stub(JWT, "verifyToken").returns(dataUserByToken);
		const httpResponse = await chai.request(app)
			.patch(`/matches/999/finish`)
			.set(createMatche.req.headers);

		expect(httpResponse.status).to.be.equal(404);
	});

	it('route /matches:id return status 200 ao atualizar o numero de gols de uma partida', async () => {
		sinon
			.stub(Matches, "findByPk")
			.resolves(body as Matches);
		sinon
			.stub(Matches, "update")
			.resolves([0]);
		sinon.stub(JWT, "verifyToken").returns(dataUserByToken);
		const httpResponse = await chai.request(app)
			.patch(`/matches/1`)
			.set(createMatche.req.headers)
			.send({
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			});

		expect(httpResponse.status).to.be.equal(200);
		expect(httpResponse.body).to.be.deep.equal({ message: 'Updated!' });
	});

	it('route /matches:id return status 404 ao tentar atualizar o numero de gols de uma partida que não existe', async () => {
		sinon
			.stub(Matches, "findByPk")
			.resolves(undefined);
		sinon
			.stub(Matches, "update")
			.resolves([0]);
		sinon.stub(JWT, "verifyToken").returns(dataUserByToken);
		const httpResponse = await chai.request(app)
			.patch(`/matches/999`)
			.set(createMatche.req.headers)
			.send({
				"homeTeamGoals": 3,
				"awayTeamGoals": 1
			});

		expect(httpResponse.status).to.be.equal(404);
		expect(httpResponse.body).to.be.deep.equal({ message: 'Matche does not exist' });
	});

	it('route /matches return status 201 ao criar uma nova partida', async () => {
		sinon
			.stub(Matches, "create")
			.resolves(body as Matches);
		sinon.stub(JWT, "verifyToken").returns(dataUserByToken);
		const httpResponse = await chai.request(app)
			.post(`/matches`)
			.set(createMatche.req.headers)
			.send(createMatche.req.body);

		expect(httpResponse.status).to.be.equal(201);
		expect(httpResponse.body).to.be.deep.equal(body);
	});
});
