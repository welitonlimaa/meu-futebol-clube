const homeTeamsBoardMock = [
    {
        name: 'Santos',
        totalPoints: 9,
        totalGames: 3,
        totalVictories: 3,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 9,
        goalsOwn: 3,
        goalsBalance: 6,
        efficiency: '100.00'
    },
    {
        name: 'Palmeiras',
        totalPoints: 7,
        totalGames: 3,
        totalVictories: 2,
        totalDraws: 1,
        totalLosses: 0,
        goalsFavor: 10,
        goalsOwn: 5,
        goalsBalance: 5,
        efficiency: 77.78
    },
    {
        name: 'Corinthians',
        totalPoints: 6,
        totalGames: 2,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 6,
        goalsOwn: 1,
        goalsBalance: 5,
        efficiency: '100.00'
    },
    {
        name: 'Grêmio',
        totalPoints: 6,
        totalGames: 2,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 4,
        goalsOwn: 1,
        goalsBalance: 3,
        efficiency: 100.00
    },
    {
        name: 'Real Brasília',
        totalPoints: 6,
        totalGames: 2,
        totalVictories: 2,
        totalDraws: 0,
        totalLosses: 0,
        goalsFavor: 2,
        goalsOwn: 0,
        goalsBalance: 2,
        efficiency: '100.00'
    },
    {
        name: 'São Paulo',
        totalPoints: 4,
        totalGames: 2,
        totalVictories: 1,
        totalDraws: 1,
        totalLosses: 0,
        goalsFavor: 4,
        goalsOwn: 1,
        goalsBalance: 3,
        efficiency: '66.67'
    },
    {
        name: 'Internacional',
        totalPoints: 4,
        totalGames: 3,
        totalVictories: 1,
        totalDraws: 1,
        totalLosses: 1,
        goalsFavor: 4,
        goalsOwn: 6,
        goalsBalance: -2,
        efficiency: 44.44
    },
    {
        name: 'Botafogo',
        totalPoints: 4,
        totalGames: 3,
        totalVictories: 1,
        totalDraws: 1,
        totalLosses: 1,
        goalsFavor: 2,
        goalsOwn: 4,
        goalsBalance: -2,
        efficiency: 44.44
    },
    {
        name: 'Ferroviária',
        totalPoints: 3,
        totalGames: 2,
        totalVictories: 1,
        totalDraws: 0,
        totalLosses: 1,
        goalsFavor: 3,
        goalsOwn: 2,
        goalsBalance: 1,
        efficiency: '50.00'
    },
    {
        name: 'Napoli-SC',
        totalPoints: 2,
        totalGames: 2,
        totalVictories: 0,
        totalDraws: 2,
        totalLosses: 0,
        goalsFavor: 2,
        goalsOwn: 2,
        goalsBalance: 0,
        efficiency: 33.33
    },
    {
        name: 'Cruzeiro',
        totalPoints: 1,
        totalGames: 2,
        totalVictories: 0,
        totalDraws: 1,
        totalLosses: 1,
        goalsFavor: 2,
        goalsOwn: 3,
        goalsBalance: -1,
        efficiency: '16.67'
    },
    {
        name: 'Flamengo',
        totalPoints: 1,
        totalGames: 2,
        totalVictories: 0,
        totalDraws: 1,
        totalLosses: 1,
        goalsFavor: 1,
        goalsOwn: 2,
        goalsBalance: -1,
        efficiency: '16.67'
    },
    {
        name: 'Minas Brasília',
        totalPoints: 1,
        totalGames: 3,
        totalVictories: 0,
        totalDraws: 1,
        totalLosses: 2,
        goalsFavor: 3,
        goalsOwn: 6,
        goalsBalance: -3,
        efficiency: '11.11'
    },
    {
        name: 'Avaí/Kindermann',
        totalPoints: 1,
        totalGames: 3,
        totalVictories: 0,
        totalDraws: 1,
        totalLosses: 2,
        goalsFavor: 3,
        goalsOwn: 7,
        goalsBalance: -4,
        efficiency: '11.11'
    },
    {
        name: 'São José-SP',
        totalPoints: 0,
        totalGames: 3,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 3,
        goalsFavor: 2,
        goalsOwn: 5,
        goalsBalance: -3,
        efficiency: '0.00'
    },
    {
        name: 'Bahia',
        totalPoints: 0,
        totalGames: 3,
        totalVictories: 0,
        totalDraws: 0,
        totalLosses: 3,
        goalsFavor: 0,
        goalsOwn: 4,
        goalsBalance: -4,
        efficiency: '0.00'
    }
];

const matchesMock = [
    {
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 16,
            teamName: 'São Paulo'
        },
        awayTeam: {
            id: 8,
            teamName: 'Grêmio'
        }
    },
    {
        id: 2,
        homeTeamId: 9,
        homeTeamGoals: 1,
        awayTeamId: 14,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 9,
            teamName: 'Internacional'
        },
        awayTeam: {
            id: 14,
            teamName: 'Santos'
        }
    },
    {
        id: 3,
        homeTeamId: 4,
        homeTeamGoals: 3,
        awayTeamId: 11,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 4,
            teamName: 'Corinthians'
        },
        awayTeam: {
            id: 11,
            teamName: 'Napoli-SC'
        }
    },
    {
        id: 4,
        homeTeamId: 3,
        homeTeamGoals: 0,
        awayTeamId: 2,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 3,
            teamName: 'Botafogo'
        },
        awayTeam: {
            id: 2,
            teamName: 'Bahia'
        }
    },
    {
        id: 5,
        homeTeamId: 7,
        homeTeamGoals: 1,
        awayTeamId: 10,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 7,
            teamName: 'Flamengo'
        },
        awayTeam: {
            id: 10,
            teamName: 'Minas Brasília'
        }
    },
    {
        id: 6,
        homeTeamId: 5,
        homeTeamGoals: 1,
        awayTeamId: 13,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 5,
            teamName: 'Cruzeiro'
        },
        awayTeam: {
            id: 13,
            teamName: 'Real Brasília'
        }
    },
    {
        id: 7,
        homeTeamId: 12,
        homeTeamGoals: 2,
        awayTeamId: 6,
        awayTeamGoals: 2,
        inProgress: false,
        homeTeam: {
            id: 12,
            teamName: 'Palmeiras'
        },
        awayTeam: {
            id: 6,
            teamName: 'Ferroviária'
        }
    },
    {
        id: 8,
        homeTeamId: 15,
        homeTeamGoals: 0,
        awayTeamId: 1,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 15,
            teamName: 'São José-SP'
        },
        awayTeam: {
            id: 1,
            teamName: 'Avaí/Kindermann'
        }
    },
    {
        id: 9,
        homeTeamId: 1,
        homeTeamGoals: 0,
        awayTeamId: 12,
        awayTeamGoals: 3,
        inProgress: false,
        homeTeam: {
            id: 1,
            teamName: 'Avaí/Kindermann'
        },
        awayTeam: {
            id: 12,
            teamName: 'Palmeiras'
        }
    },
    {
        id: 10,
        homeTeamId: 2,
        homeTeamGoals: 0,
        awayTeamId: 9,
        awayTeamGoals: 2,
        inProgress: false,
        homeTeam: {
            id: 2,
            teamName: 'Bahia'
        },
        awayTeam: {
            id: 9,
            teamName: 'Internacional'
        }
    },
    {
        id: 11,
        homeTeamId: 13,
        homeTeamGoals: 1,
        awayTeamId: 3,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 13,
            teamName: 'Real Brasília'
        },
        awayTeam: {
            id: 3,
            teamName: 'Botafogo'
        }
    },
    {
        id: 12,
        homeTeamId: 6,
        homeTeamGoals: 0,
        awayTeamId: 4,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 6,
            teamName: 'Ferroviária'
        },
        awayTeam: {
            id: 4,
            teamName: 'Corinthians'
        }
    },
    {
        id: 13,
        homeTeamId: 8,
        homeTeamGoals: 2,
        awayTeamId: 5,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 8,
            teamName: 'Grêmio'
        },
        awayTeam: {
            id: 5,
            teamName: 'Cruzeiro'
        }
    },
    {
        id: 14,
        homeTeamId: 14,
        homeTeamGoals: 2,
        awayTeamId: 16,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 14,
            teamName: 'Santos'
        },
        awayTeam: {
            id: 16,
            teamName: 'São Paulo'
        }
    },
    {
        id: 15,
        homeTeamId: 10,
        homeTeamGoals: 0,
        awayTeamId: 15,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 10,
            teamName: 'Minas Brasília'
        },
        awayTeam: {
            id: 15,
            teamName: 'São José-SP'
        }
    },
    {
        id: 16,
        homeTeamId: 11,
        homeTeamGoals: 0,
        awayTeamId: 7,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 11,
            teamName: 'Napoli-SC'
        },
        awayTeam: {
            id: 7,
            teamName: 'Flamengo'
        }
    },
    {
        id: 17,
        homeTeamId: 1,
        homeTeamGoals: 2,
        awayTeamId: 8,
        awayTeamGoals: 3,
        inProgress: false,
        homeTeam: {
            id: 1,
            teamName: 'Avaí/Kindermann'
        },
        awayTeam: {
            id: 8,
            teamName: 'Grêmio'
        }
    },
    {
        id: 18,
        homeTeamId: 12,
        homeTeamGoals: 4,
        awayTeamId: 5,
        awayTeamGoals: 2,
        inProgress: false,
        homeTeam: {
            id: 12,
            teamName: 'Palmeiras'
        },
        awayTeam: {
            id: 5,
            teamName: 'Cruzeiro'
        }
    },
    {
        id: 19,
        homeTeamId: 11,
        homeTeamGoals: 2,
        awayTeamId: 2,
        awayTeamGoals: 2,
        inProgress: false,
        homeTeam: {
            id: 11,
            teamName: 'Napoli-SC'
        },
        awayTeam: {
            id: 2,
            teamName: 'Bahia'
        }
    },
    {
        id: 20,
        homeTeamId: 7,
        homeTeamGoals: 0,
        awayTeamId: 9,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 7,
            teamName: 'Flamengo'
        },
        awayTeam: {
            id: 9,
            teamName: 'Internacional'
        }
    },
    {
        id: 21,
        homeTeamId: 6,
        homeTeamGoals: 3,
        awayTeamId: 13,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 6,
            teamName: 'Ferroviária'
        },
        awayTeam: {
            id: 13,
            teamName: 'Real Brasília'
        }
    },
    {
        id: 22,
        homeTeamId: 4,
        homeTeamGoals: 3,
        awayTeamId: 3,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 4,
            teamName: 'Corinthians'
        },
        awayTeam: {
            id: 3,
            teamName: 'Botafogo'
        }
    },
    {
        id: 23,
        homeTeamId: 15,
        homeTeamGoals: 2,
        awayTeamId: 16,
        awayTeamGoals: 3,
        inProgress: false,
        homeTeam: {
            id: 15,
            teamName: 'São José-SP'
        },
        awayTeam: {
            id: 16,
            teamName: 'São Paulo'
        }
    },
    {
        id: 24,
        homeTeamId: 10,
        homeTeamGoals: 2,
        awayTeamId: 14,
        awayTeamGoals: 2,
        inProgress: false,
        homeTeam: {
            id: 10,
            teamName: 'Minas Brasília'
        },
        awayTeam: {
            id: 14,
            teamName: 'Santos'
        }
    },
    {
        id: 25,
        homeTeamId: 2,
        homeTeamGoals: 0,
        awayTeamId: 6,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 2,
            teamName: 'Bahia'
        },
        awayTeam: {
            id: 6,
            teamName: 'Ferroviária'
        }
    },
    {
        id: 26,
        homeTeamId: 13,
        homeTeamGoals: 1,
        awayTeamId: 1,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 13,
            teamName: 'Real Brasília'
        },
        awayTeam: {
            id: 1,
            teamName: 'Avaí/Kindermann'
        }
    },
    {
        id: 27,
        homeTeamId: 5,
        homeTeamGoals: 1,
        awayTeamId: 15,
        awayTeamGoals: 2,
        inProgress: false,
        homeTeam: {
            id: 5,
            teamName: 'Cruzeiro'
        },
        awayTeam: {
            id: 15,
            teamName: 'São José-SP'
        }
    },
    {
        id: 28,
        homeTeamId: 16,
        homeTeamGoals: 3,
        awayTeamId: 7,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 16,
            teamName: 'São Paulo'
        },
        awayTeam: {
            id: 7,
            teamName: 'Flamengo'
        }
    },
    {
        id: 29,
        homeTeamId: 9,
        homeTeamGoals: 0,
        awayTeamId: 4,
        awayTeamGoals: 4,
        inProgress: false,
        homeTeam: {
            id: 9,
            teamName: 'Internacional'
        },
        awayTeam: {
            id: 4,
            teamName: 'Corinthians'
        }
    },
    {
        id: 30,
        homeTeamId: 3,
        homeTeamGoals: 0,
        awayTeamId: 12,
        awayTeamGoals: 4,
        inProgress: false,
        homeTeam: {
            id: 3,
            teamName: 'Botafogo'
        },
        awayTeam: {
            id: 12,
            teamName: 'Palmeiras'
        }
    },
    {
        id: 31,
        homeTeamId: 8,
        homeTeamGoals: 2,
        awayTeamId: 10,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 8,
            teamName: 'Grêmio'
        },
        awayTeam: {
            id: 10,
            teamName: 'Minas Brasília'
        }
    },
    {
        id: 32,
        homeTeamId: 14,
        homeTeamGoals: 5,
        awayTeamId: 11,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 14,
            teamName: 'Santos'
        },
        awayTeam: {
            id: 11,
            teamName: 'Napoli-SC'
        }
    },
    {
        id: 33,
        homeTeamId: 1,
        homeTeamGoals: 1,
        awayTeamId: 16,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 1,
            teamName: 'Avaí/Kindermann'
        },
        awayTeam: {
            id: 16,
            teamName: 'São Paulo'
        }
    },
    {
        id: 34,
        homeTeamId: 9,
        homeTeamGoals: 3,
        awayTeamId: 6,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 9,
            teamName: 'Internacional'
        },
        awayTeam: {
            id: 6,
            teamName: 'Ferroviária'
        }
    },
    {
        id: 35,
        homeTeamId: 10,
        homeTeamGoals: 1,
        awayTeamId: 5,
        awayTeamGoals: 3,
        inProgress: false,
        homeTeam: {
            id: 10,
            teamName: 'Minas Brasília'
        },
        awayTeam: {
            id: 5,
            teamName: 'Cruzeiro'
        }
    },
    {
        id: 36,
        homeTeamId: 2,
        homeTeamGoals: 0,
        awayTeamId: 7,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 2,
            teamName: 'Bahia'
        },
        awayTeam: {
            id: 7,
            teamName: 'Flamengo'
        }
    },
    {
        id: 37,
        homeTeamId: 15,
        homeTeamGoals: 0,
        awayTeamId: 13,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 15,
            teamName: 'São José-SP'
        },
        awayTeam: {
            id: 13,
            teamName: 'Real Brasília'
        }
    },
    {
        id: 38,
        homeTeamId: 14,
        homeTeamGoals: 2,
        awayTeamId: 4,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 14,
            teamName: 'Santos'
        },
        awayTeam: {
            id: 4,
            teamName: 'Corinthians'
        }
    },
    {
        id: 39,
        homeTeamId: 3,
        homeTeamGoals: 2,
        awayTeamId: 11,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            id: 3,
            teamName: 'Botafogo'
        },
        awayTeam: {
            id: 11,
            teamName: 'Napoli-SC'
        }
    },
    {
        id: 40,
        homeTeamId: 12,
        homeTeamGoals: 4,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            id: 12,
            teamName: 'Palmeiras'
        },
        awayTeam: {
            id: 8,
            teamName: 'Grêmio'
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
            id: 16,
            teamName: 'São Paulo'
        },
        awayTeam: {
            id: 9,
            teamName: 'Internacional'
        }
    },
    {
        id: 42,
        homeTeamId: 6,
        homeTeamGoals: 1,
        awayTeamId: 1,
        awayTeamGoals: 0,
        inProgress: true,
        homeTeam: {
            id: 6,
            teamName: 'Ferroviária'
        },
        awayTeam: {
            id: 1,
            teamName: 'Avaí/Kindermann'
        }
    },
    {
        id: 43,
        homeTeamId: 11,
        homeTeamGoals: 0,
        awayTeamId: 10,
        awayTeamGoals: 0,
        inProgress: true,
        homeTeam: {
            id: 11,
            teamName: 'Napoli-SC'
        },
        awayTeam: {
            id: 10,
            teamName: 'Minas Brasília'
        }
    },
    {
        id: 44,
        homeTeamId: 7,
        homeTeamGoals: 2,
        awayTeamId: 15,
        awayTeamGoals: 2,
        inProgress: true,
        homeTeam: {
            id: 7,
            teamName: 'Flamengo'
        },
        awayTeam: {
            id: 15,
            teamName: 'São José-SP'
        }
    },
    {
        id: 45,
        homeTeamId: 5,
        homeTeamGoals: 1,
        awayTeamId: 3,
        awayTeamGoals: 1,
        inProgress: true,
        homeTeam: {
            id: 5,
            teamName: 'Cruzeiro'
        },
        awayTeam: {
            id: 3,
            teamName: 'Botafogo'
        }
    },
    {
        id: 46,
        homeTeamId: 4,
        homeTeamGoals: 1,
        awayTeamId: 12,
        awayTeamGoals: 1,
        inProgress: true,
        homeTeam: {
            id: 4,
            teamName: 'Corinthians'
        },
        awayTeam: {
            id: 12,
            teamName: 'Palmeiras'
        }
    },
    {
        id: 47,
        homeTeamId: 8,
        homeTeamGoals: 1,
        awayTeamId: 14,
        awayTeamGoals: 2,
        inProgress: true,
        homeTeam: {
            id: 8,
            teamName: 'Grêmio'
        },
        awayTeam: {
            id: 14,
            teamName: 'Santos'
        }
    },
    {
        id: 48,
        homeTeamId: 13,
        homeTeamGoals: 1,
        awayTeamId: 2,
        awayTeamGoals: 1,
        inProgress: true,
        homeTeam: {
            id: 13,
            teamName: 'Real Brasília'
        },
        awayTeam: {
            id: 2,
            teamName: 'Bahia'
        }
    }
];

const teamsMock = [
    {
        id: 1,
        teamName: 'Avaí/Kindermann'
    },
    {
        id: 2,
        teamName: 'Bahia'
    },
    {
        id: 3,
        teamName: 'Botafogo'
    },
    {
        id: 4,
        teamName: 'Corinthians'
    },
    {
        id: 5,
        teamName: 'Cruzeiro'
    },
    {
        id: 6,
        teamName: 'Ferroviária'
    },
    {
        id: 7,
        teamName: 'Flamengo'
    },
    {
        id: 8,
        teamName: 'Grêmio'
    },
    {
        id: 9,
        teamName: 'Internacional'
    },
    {
        id: 10,
        teamName: 'Minas Brasília'
    },
    {
        id: 11,
        teamName: 'Napoli-SC'
    },
    {
        id: 12,
        teamName: 'Palmeiras'
    },
    {
        id: 13,
        teamName: 'Real Brasília'
    },
    {
        id: 14,
        teamName: 'Santos'
    },
    {
        id: 15,
        teamName: 'São José-SP'
    },
    {
        id: 16,
        teamName: 'São Paulo'
    }
];

export {
    matchesMock,
    teamsMock
}

export default homeTeamsBoardMock;