import React from 'react'
import PlayerCard from './'

describe('<PlayerCard />', () => {
  it('renders <PlayerCard /> component', () => {
    const player = { 
      shortname: 'Rafa',
      country: {},
      data: {
        rank: 1,
        last: []
      }
    }
    
    const wrapper = mount(
      <PlayerCard player={player} />
    )
    expect(wrapper.length).toEqual(1)
  })
})