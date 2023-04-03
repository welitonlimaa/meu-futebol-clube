const matchesMock = [
	{
		id: 1,
		homeTeamId: 16,
		homeTeamGoals: 1,
		awayTeamId: 8,
		awayTeamGoals: 1,
		inProgress: false,
		homeTeam: {
			teamName: "São Paulo"
		},
		awayTeam: {
			teamName: "Grêmio"
		}
	},
	{
		id: 41,
		homeTeamId: 16,
		homeTeamGoals: 2,
		awayTeamId: 9,
		awayTeamGoals: 0,
		inProgress: true,
		homeTeam: {
			teamName: "São Paulo"
		},
		awayTeam: {
			teamName: "Internaciona"
		}
	}
];

const matchesInProgress = [
	{
		id: 41,
		homeTeamId: 16,
		homeTeamGoals: 2,
		awayTeamId: 9,
		awayTeamGoals: 0,
		inProgress: true,
		homeTeam: {
			teamName: "São Paulo"
		},
		awayTeam: {
			teamName: "Internaciona"
		}
	}
];

const tokenMock = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2ODA1NDEwMjMsImV4cCI6MTY4MDYyNzQyM30.576rU9-aPEHfNqZnkStpieiuDhCQpWdgoIQaEvaYTw8";

const createMatche = {
	req: {
		headers: {
			authorization: tokenMock
		},
		body: {

			homeTeamId: 16,
			awayTeamId: 8,
			homeTeamGoals: 2,
			awayTeamGoals: 2

		}
	},
	res: {
		body: {
			id: 49,
			homeTeamId: 16,
			awayTeamId: 8,
			homeTeamGoals: 2,
			awayTeamGoals: 2,
			inProgress: true
		}
	}
};

const dataUserByToken = {
	data: {
		id: 49,
		username: 'Admin',
		role: 'admin',
		email: 'admin@admin.com',
		password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
	}
};

export {
	matchesInProgress,
	createMatche,
	dataUserByToken
}
export default matchesMock;