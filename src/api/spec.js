import { fetchPlayers } from './'

describe('apiCalls', () => {
  it('returns an object if status code is ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => new Promise((resolve, reject) => {
        resolve({
          players: [],
        })
      }),
    }))

    expect(fetchPlayers()).resolves.toEqual({ players: [] })
  })

  it('throws an error if status code is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
    }))

    expect(fetchPlayers()).rejects.toEqual(Error('Something went wrong'))
  })
})
