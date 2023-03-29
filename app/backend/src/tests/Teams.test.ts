import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Teams from '../database/models/TeamsModel';

// import UserService from '../services/UserService';

// import UserController from '../controllers/UserControler';

import { Response } from 'superagent';

import ITeam from '../Interfaces/teamInterfaces';

import teamsMock from './Mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de integração route /Teams', () => {
	afterEach(() => {
		sinon.restore();
	})

	it('route /teams return status 200', async () => {
		sinon
			.stub(Teams, "findAll")
			.resolves(teamsMock as Teams[]);

		const httpResponse = await chai.request(app).get(`/teams`);

		expect(httpResponse.status).to.be.equal(200);
		expect(httpResponse.body).to.be.deep.equal(teamsMock);
	});

	// it('userServices return teams', async () => {
	// 	sinon
	// 		.stub(Teams, "findAll")
	// 		.resolves(teamsMock as Teams[]);

	// 	const teams = await Teams.findAll();

	// 	expect(teams).to.be.equals(teamsMock);
	// });

	// it('userController return status 200 and json with Teams', async () => {
	// 	sinon
	// 		.stub(TeamService, "getAll")
	// 		.resolves({ status: 200, message: teamsMock });

	// 	const { status, message } = await UserService.getAll();

	// 	expect(status).to.be.equals(200);
	// 	expect(message).to.be.equals(teamsMock);
	// });
});
