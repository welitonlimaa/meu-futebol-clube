import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Teams from '../database/models/TeamsModel';

import Matches from '../database/models/MatchesModel';
import homeTeamsBoardMock, { matchesMock, teamsMock } from './Mocks/leaderboardMock';
import IMatcheTeam from '../interfaces/matcheInterfaces';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste de integração Leaderboard', () => {
    afterEach(() => {
        sinon.restore();
    })

    it('route /leaderboard/home retorna status 200 com o desempenho dos times', async () => {
        sinon
            .stub(Teams, "findAll")
            .resolves(teamsMock as Teams[]);

        sinon
            .stub(Matches, "findAll")
            .resolves(matchesMock as unknown as IMatcheTeam[]);


        const httpResponse = await chai.request(app).get(`/leaderboard/home`);

        expect(httpResponse.status).to.be.equal(200);
        expect(httpResponse.body).to.be.deep.equal(homeTeamsBoardMock);
    });
});
