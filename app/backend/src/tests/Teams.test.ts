import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Teams from '../database/models/TeamsModel';

import teamsMock, { teamMock } from './Mocks/teamsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de integração route /Teams', () => {
	afterEach(() => {
		sinon.restore();
	})

	it('route /teams return status 200 e um array de times', async () => {
		sinon
			.stub(Teams, "findAll")
			.resolves(teamsMock as Teams[]);

		const httpResponse = await chai.request(app).get(`/teams`);

		expect(httpResponse.status).to.be.equal(200);
		expect(httpResponse.body).to.be.deep.equal(teamsMock);
	});

	it('route /teams/id return status 200 e um time pelo id', async () => {
		sinon
			.stub(Teams, "findByPk")
			.resolves(teamMock as Teams);

		const httpResponse = await chai.request(app).get(`/teams/id`);

		expect(httpResponse.status).to.be.equal(200);
		expect(httpResponse.body).to.be.deep.equal(teamMock);
	});
});
