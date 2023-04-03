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


const createMatche = {
	req: {
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
}

export {
	matchesInProgress,
	createMatche
}
export default matchesMock;